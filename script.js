// إعدادات Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC_V-GXnzvoabdOdPppDYp4WCRjsDgzgkI",
    authDomain: "platform-46177.firebaseapp.com",
    databaseURL: "https://platform-46177-default-rtdb.firebaseio.com",
    projectId: "platform-46177",
    storageBucket: "platform-46177.firebasestorage.app",
    messagingSenderId: "933736879105",
    appId: "1:933736879105:web:13fa2d985214be44881c00",
    measurementId: "G-9P1KMPCSJ"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// بيانات المدربين
const trainersData = [
    { id: 1, name: "محمود عبدالله", specialty: "تضخيم وكمال أجسام", pricePerMonth: 1500, image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "سارة خالد", specialty: "تخسيس وتغذية", pricePerMonth: 1700, image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, name: "أحمد رجب", specialty: "كروس فيت", pricePerMonth: 1800, image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 4, name: "نور الهدى", specialty: "يوجا وتأمل", pricePerMonth: 1400, image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 5, name: "كريم وائل", specialty: "بطل كمال أجسام", pricePerMonth: 2000, image: "https://randomuser.me/api/portraits/men/15.jpg" }
];

// عرض المدربين
function renderTrainers() {
    const container = document.getElementById('trainersContainer');
    if (!container) return;
    
    container.innerHTML = trainersData.map(trainer => `
        <div class="trainer-card" onclick="selectTrainer(${trainer.id})">
            <img src="${trainer.image}" class="trainer-img" 
                 onerror="this.src='https://placehold.co/120x120/333/ff3b3b?text=PT'">
            <h3 class="trainer-name">${trainer.name}</h3>
            <p>${trainer.specialty}</p>
            <div class="price">💰 ${trainer.pricePerMonth} ج.م / شهرياً</div>
        </div>
    `).join('');
}

// تعبئة قائمة المدربين
function populateTrainerSelect() {
    const select = document.getElementById('trainerSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">-- اختر مدرب --</option>' +
        trainersData.map(trainer => 
            `<option value="${trainer.id}">${trainer.name} - ${trainer.pricePerMonth} ج.م/شهر</option>`
        ).join('');
}

// تحديد مدرب
window.selectTrainer = function(trainerId) {
    const select = document.getElementById('trainerSelect');
    if (select) select.value = trainerId;
    document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
};

// حساب السعر
function calculatePrice(monthlyPrice, months) {
    let discount = 0;
    if (months === 3) discount = 0.05;
    else if (months === 6) discount = 0.10;
    else if (months === 12) discount = 0.15;
    let total = monthlyPrice * months;
    total = total - (total * discount);
    return Math.round(total);
}

// حفظ الاشتراك في Firebase
function saveSubscriptionToFirebase(subscriptionData) {
    const subscriptionsRef = database.ref('subscriptions');
    const newSubscriptionRef = subscriptionsRef.push();
    
    return newSubscriptionRef.set({
        ...subscriptionData,
        createdAt: new Date().toISOString(),
        id: newSubscriptionRef.key
    });
}

// تحميل الاشتراكات من Firebase
function loadSubscriptions() {
    const subscriptionsRef = database.ref('subscriptions');
    const listContainer = document.getElementById('subscriptionsList');
    
    if (!listContainer) return;
    
    listContainer.innerHTML = '<div class="loading">⏳ جاري تحميل الاشتراكات...</div>';
    
    subscriptionsRef.on('value', (snapshot) => {
        const subscriptions = snapshot.val();
        
        if (!subscriptions) {
            listContainer.innerHTML = '<div class="loading">📭 لا توجد اشتراكات حتى الآن</div>';
            return;
        }
        
        const subscriptionsArray = Object.values(subscriptions).reverse();
        
        listContainer.innerHTML = subscriptionsArray.map(sub => `
            <div class="subscription-item" data-id="${sub.id}">
                <h4>${sub.userName}</h4>
                <p><strong>🏋️ المدرب:</strong> ${sub.trainerName}</p>
                <p><strong>📅 المدة:</strong> ${sub.months} شهر</p>
                <p><strong>💰 المبلغ:</strong> ${sub.totalPrice.toLocaleString()} ج.م</p>
                <p><strong>💳 الدفع:</strong> ${sub.paymentMethod === 'cash' ? 'كاش' : sub.paymentMethod === 'card' ? 'بطاقة ائتمان' : 'تحويل بنكي'}</p>
                <p><strong>📧 ${sub.userEmail}</strong> | 📱 ${sub.userPhone}</p>
                <p><small>📅 ${new Date(sub.createdAt).toLocaleDateString('ar-EG')}</small></p>
                <button class="delete-btn" onclick="deleteSubscription('${sub.id}')">🗑️ حذف</button>
            </div>
        `).join('');
    });
}

// حذف اشتراك
window.deleteSubscription = function(subscriptionId) {
    if (confirm('هل أنت متأكد من حذف هذا الاشتراك؟')) {
        const subscriptionRef = database.ref(`subscriptions/${subscriptionId}`);
        subscriptionRef.remove()
            .then(() => {
                showResult('✅ تم حذف الاشتراك بنجاح', 'success');
            })
            .catch((error) => {
                showResult('❌ خطأ في الحذف: ' + error.message, 'error');
            });
    }
};

// عرض النتيجة
function showResult(message, type = 'success') {
    const resultDiv = document.getElementById('subscriptionResult');
    if (!resultDiv) return;
    
    resultDiv.innerHTML = `
        <div style="color: ${type === 'success' ? '#4caf50' : '#ff3b3b'}">
            <h3>${type === 'success' ? '✅' : '❌'} ${message}</h3>
        </div>
    `;
    resultDiv.classList.add('show');
    
    setTimeout(() => {
        resultDiv.classList.remove('show');
    }, 3000);
}

// معالج الاشتراك
function handleSubscription() {
    const userName = document.getElementById('userName')?.value.trim();
    const userEmail = document.getElementById('userEmail')?.value.trim();
    const userPhone = document.getElementById('userPhone')?.value.trim();
    const trainerId = document.getElementById('trainerSelect')?.value;
    const months = parseInt(document.getElementById('monthsSelect')?.value);
    const paymentMethod = document.getElementById('paymentMethod')?.value;
    
    // التحقق
    if (!userName || !userEmail || !userPhone) {
        showResult('يرجى ملء جميع الحقول (الاسم، البريد، الهاتف)', 'error');
        return;
    }
    
    if (!trainerId) {
        showResult('يرجى اختيار المدرب', 'error');
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        showResult('البريد الإلكتروني غير صالح', 'error');
        return;
    }
    
    if (!/^01[0-9]{9}$/.test(userPhone)) {
        showResult('رقم الهاتف غير صالح (مثال: 01012345678)', 'error');
        return;
    }
    
    const selectedTrainer = trainersData.find(t => t.id == trainerId);
    if (!selectedTrainer) {
        showResult('حدث خطأ في بيانات المدرب', 'error');
        return;
    }
    
    const totalPrice = calculatePrice(selectedTrainer.pricePerMonth, months);
    
    let monthsText = "";
    if (months === 1) monthsText = "شهر واحد";
    else if (months === 3) monthsText = "3 أشهر (خصم 5%)";
    else if (months === 6) monthsText = "6 أشهر (خصم 10%)";
    else monthsText = "12 شهر (خصم 15%)";
    
    const subscriptionData = {
        userName,
        userEmail,
        userPhone,
        trainerId: selectedTrainer.id,
        trainerName: selectedTrainer.name,
        months,
        monthsText,
        paymentMethod,
        totalPrice,
        trainerPrice: selectedTrainer.pricePerMonth
    };
    
    // حفظ في Firebase
    saveSubscriptionToFirebase(subscriptionData)
        .then(() => {
            const resultDiv = document.getElementById('subscriptionResult');
            if (resultDiv) {
                resultDiv.innerHTML = `
                    <h3 style="color:#4caf50">✅ تم حفظ الاشتراك في Firebase!</h3>
                    <p><strong>🏋️ المدرب:</strong> ${selectedTrainer.name}</p>
                    <p><strong>📆 المدة:</strong> ${monthsText}</p>
                    <p><strong>👤 المتدرب:</strong> ${userName}</p>
                    <p><strong>💰 الإجمالي:</strong> ${totalPrice.toLocaleString()} ج.م</p>
                    <p><strong>💳 طريقة الدفع:</strong> ${paymentMethod === 'cash' ? 'كاش' : paymentMethod === 'card' ? 'بطاقة ائتمان' : 'تحويل بنكي'}</p>
                    <p style="margin-top:10px; color:#ff3b3b;">✅ تمت المزامنة مع قاعدة البيانات!</p>
                `;
                resultDiv.classList.add('show');
            }
            
            // مسح الحقول
            document.getElementById('userName').value = '';
            document.getElementById('userEmail').value = '';
            document.getElementById('userPhone').value = '';
            document.getElementById('trainerSelect').value = '';
            document.getElementById('monthsSelect').value = '1';
            
            setTimeout(() => {
                if (resultDiv) resultDiv.classList.remove('show');
            }, 5000);
        })
        .catch((error) => {
            showResult('خطأ في حفظ البيانات: ' + error.message, 'error');
        });
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderTrainers();
    populateTrainerSelect();
    loadSubscriptions();
    
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', handleSubscription);
    }
});
