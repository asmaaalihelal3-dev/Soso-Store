// بيانات المدربين المتقدمين (احترافية + أسعار شهرية)
const trainersData = [
    { id: 1, name: "محمود عبدالله (IFBB Pro)", specialty: "تضخيم وكمال أجسام محترف", pricePerMonth: 1650, image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "سارة خالد (Nutrition Coach)", specialty: "تخسيس وتغذية علاجية", pricePerMonth: 1800, image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { id: 3, name: "أحمد رجب (CrossFit L3)", specialty: "كروس فيت ورفع أثقال أولمبي", pricePerMonth: 1950, image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 4, name: "نور الهدى (Yoga Master)", specialty: "يوجا وتأمل واستشفاء", pricePerMonth: 1500, image: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 5, name: "كريم وائل (Mr. Egypt)", specialty: "بطل كمال أجسام ولياقة وظيفية", pricePerMonth: 2100, image: "https://randomuser.me/api/portraits/men/15.jpg" }
];

// دالة عرض المدربين مع الأسعار السنوية والتشجيعية
function renderTrainers() {
    const container = document.getElementById('trainersContainer');
    if (!container) return;
    container.innerHTML = '';
    trainersData.forEach(trainer => {
        const annual = trainer.pricePerMonth * 12;
        const discountAnnual = Math.round(annual * 0.9); // وفر 10% تقريبا
        const card = document.createElement('div');
        card.className = 'trainer-card';
        card.innerHTML = `
            <img src="${trainer.image}" alt="${trainer.name}" class="trainer-img" onerror="this.src='https://placehold.co/110x110/222/ff3b3b?text=PT'">
            <h3 class="trainer-name">${trainer.name}</h3>
            <p style="font-size:0.8rem; color:#b9c3ce;">🎯 ${trainer.specialty}</p>
            <div class="price">💰 ${trainer.pricePerMonth.toLocaleString()} ج.م / شهرياً</div>
            <div class="price" style="background:#1f232d; margin-top:6px;">📆 سنوياً: ${discountAnnual.toLocaleString()} ج.م (وفر 10%)</div>
            <p style="margin-top:12px; font-size:0.75rem; color:#bbb;">⭐ جلسات فردية | خطط تدريب مخصصة</p>
        `;
        container.appendChild(card);
    });
}

// تعبئة قائمة اختيار المدرب في الفورم
function populateTrainerSelect() {
    const select = document.getElementById('trainerSelect');
    if (!select) return;
    select.innerHTML = '<option value="">-- اختر مدربك المفضل --</option>';
    trainersData.forEach(trainer => {
        const option = document.createElement('option');
        option.value = trainer.id;
        option.textContent = `${trainer.name} | ${trainer.pricePerMonth.toLocaleString()} ج.م/شهر`;
        select.appendChild(option);
    });
}

// حساب السعر النهائي بعد الخصم حسب عدد الشهور
function calculateDiscountedTotal(monthlyPrice, months) {
    let discountRate = 0;
    if (months === 3) discountRate = 0.05;
    else if (months === 6) discountRate = 0.10;
    else if (months === 12) discountRate = 0.15;
    let total = monthlyPrice * months;
    total = total - (total * discountRate);
    return Math.round(total);
}

// معالج الاشتراك: اسم المدرب + عدد الشهور + اسم المتدرب
function handleSubscription() {
    const userNameInput = document.getElementById('userName');
    const userName = userNameInput.value.trim();
    const trainerId = document.getElementById('trainerSelect').value;
    const months = parseInt(document.getElementById('monthsSelect').value);
    const resultDiv = document.getElementById('subscriptionResult');

    // تحقق متقدم
    if (!userName) {
        alert("يرجى إدخال اسمك بالكامل (ثلاثي) لتسجيل الاشتراك");
        userNameInput.focus();
        return;
    }
    if (!trainerId) {
        alert("الرجاء اختيار المدرب الذي سيشرف على تدريبك");
        return;
    }
    if (userName.length < 5) {
        alert("من فضلك أدخل الاسم الكامل بشكل صحيح.");
        return;
    }

    const selectedTrainer = trainersData.find(t => t.id == trainerId);
    if (!selectedTrainer) {
        alert("خطأ في بيانات المدرب، أعد المحاولة");
        return;
    }

    const totalPrice = calculateDiscountedTotal(selectedTrainer.pricePerMonth, months);
    let monthsDisplay = "";
    if (months === 1) monthsDisplay = "شهر واحد (بدون خصم)";
    else if (months === 3) monthsDisplay = "3 أشهر (خصم 5%)";
    else if (months === 6) monthsDisplay = "6 أشهر (خصم 10%)";
    else if (months === 12) monthsDisplay = "12 شهر (خصم 15%)";

    // عرض النتيجة المطلوبة بوضوح: اسم المدرب + كم شهر + اسم المتدرب
    resultDiv.innerHTML = `
        <div style="border-bottom:1px solid #ff5e5e; margin-bottom:16px; padding-bottom:8px;">
            <span style="font-size:1.3rem;">✅ تم تأكيد الحجز</span>
        </div>
        <p><span style="color:#ffa27a;">🏋️ المدرب:</span> <strong>${selectedTrainer.name}</strong> (${selectedTrainer.specialty})</p>
        <p><span style="color:#ffa27a;">📆 مدة التدريب:</span> ${monthsDisplay}</p>
        <p><span style="color:#ffa27a;">👤 المتدرب:</span> <strong style="color:#fff;">${userName}</strong></p>
        <p><span style="color:#ffa27a;">💰 الإجمالي بعد الخصم:</span> ${totalPrice.toLocaleString()} جنيه مصري</p>
        <p style="margin-top:14px; background:#1e232c; padding:10px; border-radius:20px; font-size:0.85rem;">📞 سيتم التواصل خلال 4 ساعات لتأكيد أول جلسة وتوزيع جدول التدريب.</p>
        <button id="resetSubscriptionBtn" class="btn" style="margin-top:20px; background:#2a2f3a; box-shadow:none; font-size:0.85rem;">➕ اشتراك جديد</button>
    `;
    resultDiv.classList.add('show');
    
    // زر مسح أو إعادة تعيين النموذج
    const resetBtn = document.getElementById('resetSubscriptionBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('userName').value = '';
            document.getElementById('trainerSelect').value = '';
            document.getElementById('monthsSelect').value = '1';
            resultDiv.classList.remove('show');
            resultDiv.innerHTML = '';
            // تمرير خفيف للفورم
            document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // تمرير سلس للنتيجة
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// تحميل الصفحة وتعيين الاحداثيات
document.addEventListener('DOMContentLoaded', () => {
    renderTrainers();
    populateTrainerSelect();

    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) subscribeBtn.addEventListener('click', handleSubscription);

    // معالجة صور المعرض إذا تعذر تحميلها
    const images = document.querySelectorAll('.gym-img');
    images.forEach(img => {
        img.onerror = function() {
            this.src = 'https://placehold.co/600x400/1a1f27/ff4a4a?text=Iron+Area';
        };
    });

    // تحسين تجربة: جعل الروابط تنتقل بسلاسة
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (hash && hash !== '#') {
                const targetId = hash.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
