// Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

// تحديد مدرب
window.selectTrainer = function(trainerId) {
    const select = document.getElementById('trainerSelect');

    if (select) {
        select.value = trainerId;
    }

    const subscribeSection = document.getElementById('subscribe');

    if (subscribeSection) {
        subscribeSection.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

// حفظ الاشتراك
function saveSubscriptionToFirebase(subscriptionData) {
    const subscriptionsRef = database.ref('subscriptions');
    const newSubscriptionRef = subscriptionsRef.push();

    return newSubscriptionRef.set({
        ...subscriptionData,
        createdAt: new Date().toISOString(),
        firebaseId: newSubscriptionRef.key
    });
}

// تحميل الاشتراكات
function loadSubscriptions() {
    const subscriptionsRef = database.ref('subscriptions');
    const listContainer = document.getElementById('subscriptionsList');

    if (!listContainer) return;

    listContainer.innerHTML =
        '<div class="loading">⏳ جاري تحميل الاشتراكات...</div>';

    subscriptionsRef.on('value', (snapshot) => {

        const subscriptions = snapshot.val();

        if (!subscriptions) {
            listContainer.innerHTML =
                '<div class="loading">📭 لا توجد اشتراكات حتى الآن</div>';
            return;
        }

        const subscriptionsArray =
            Object.entries(subscriptions)
            .map(([key, value]) => ({
                ...value,
                firebaseId: key
            }))
            .reverse();

        listContainer.innerHTML =
            subscriptionsArray.map(sub => `
                <div class="subscription-item" data-id="${sub.firebaseId}">
                    <h4>${sub.userName}</h4>

                    <p>
                        <strong>🏋️ المدرب:</strong>
                        ${sub.trainerName}
                    </p>

                    <p>
                        <strong>📅 المدة:</strong>
                        ${sub.months} شهر
                    </p>

                    <p>
                        <strong>💰 المبلغ:</strong>
                        ${(sub.totalPrice || 0).toLocaleString()} ج.م
                    </p>

                    <p>
                        <strong>💳 الدفع:</strong>
                        ${
                            sub.paymentMethod === 'cash'
                            ? 'كاش'
                            : sub.paymentMethod === 'card'
                            ? 'بطاقة ائتمان'
                            : 'تحويل بنكي'
                        }
                    </p>

                    <p>
                        <strong>📧</strong> ${sub.userEmail}
                        |
                        <strong>📱</strong> ${sub.userPhone}
                    </p>

                    <p>
                        <small>
                            📅 ${new Date(sub.createdAt)
                                .toLocaleDateString('ar-EG')}
                        </small>
                    </p>

                    <button
                        class="delete-btn"
                        onclick="deleteSubscription('${sub.firebaseId}')">
                        🗑️ حذف
                    </button>
                </div>
            `).join('');
    });
}

// حذف اشتراك
window.deleteSubscription = function(subscriptionId) {

    if (!confirm('هل أنت متأكد من حذف هذا الاشتراك؟')) {
        return;
    }

    database
        .ref(`subscriptions/${subscriptionId}`)
        .remove()
        .then(() => {
            showResult(
                '✅ تم حذف الاشتراك بنجاح',
                'success'
            );
        })
        .catch((error) => {
            showResult(
                '❌ خطأ في الحذف: ' + error.message,
                'error'
            );
        });
};

// تنظيف الحقول بعد الحفظ
function clearForm() {
    document.getElementById('userName')?.value = '';
    document.getElementById('userEmail')?.value = '';
    document.getElementById('userPhone')?.value = '';
    document.getElementById('trainerSelect')?.value = '';
    document.getElementById('monthsSelect')?.value = '1';
                    }
