<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>تسجيل امتحانات الثالثة ثانوي - نظام متكامل</title>
  <!-- Font Awesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Cairo', 'Segoe UI', sans-serif;
    }

    body {
      background: linear-gradient(145deg, #e8edf5 0%, #b0c4db 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
    }

    .main-container {
      max-width: 1100px;
      width: 100%;
      min-height: 85vh;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(28px);
      -webkit-backdrop-filter: blur(28px);
      border-radius: 60px;
      padding: 2.5rem 3rem;
      box-shadow: 0 50px 100px -30px rgba(8, 20, 50, 0.4),
                  inset 0 1px 3px rgba(255,255,255,0.7);
      border: 1px solid rgba(255,255,255,0.4);
      position: relative;
      overflow: hidden;
      transition: all 0.4s ease;
    }

    /* Decorative elements */
    .main-container::before {
      content: '✦';
      position: absolute;
      top: 30px;
      right: 50px;
      font-size: 8rem;
      color: rgba(26, 75, 116, 0.03);
      pointer-events: none;
      transform: rotate(15deg);
    }

    .main-container::after {
      content: '★';
      position: absolute;
      bottom: 30px;
      left: 50px;
      font-size: 10rem;
      color: rgba(247, 201, 72, 0.04);
      pointer-events: none;
      transform: rotate(-10deg);
    }

    .bg-circle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      opacity: 0.04;
    }

    .bg-circle.c1 {
      width: 300px;
      height: 300px;
      top: -100px;
      left: -100px;
      background: #1a4b74;
    }

    .bg-circle.c2 {
      width: 400px;
      height: 400px;
      bottom: -150px;
      right: -150px;
      background: #f7c948;
    }

    /* ========== PAGES ========== */
    .page {
      display: none;
      animation: fadeSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      position: relative;
      z-index: 1;
    }

    .page.active {
      display: block;
    }

    @keyframes fadeSlide {
      from {
        opacity: 0;
        transform: translateY(30px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    /* ============================================================ */
    /* ==================== WELCOME PAGE =========================== */
    /* ============================================================ */

    .welcome-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 65vh;
      text-align: center;
      padding: 1rem 0;
    }

    .welcome-badge {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: rgba(26, 75, 116, 0.08);
      padding: 8px 24px;
      border-radius: 60px;
      font-size: 0.9rem;
      font-weight: 600;
      color: #1a4b74;
      border: 1px solid rgba(26, 75, 116, 0.1);
      margin-bottom: 1.5rem;
    }

    .welcome-title {
      font-size: 3.2rem;
      font-weight: 900;
      line-height: 1.3;
      color: #0a1a2e;
      max-width: 700px;
    }

    .welcome-title .highlight {
      background: linear-gradient(135deg, #1a4b74, #f7c948);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline-block;
    }

    .welcome-title .big {
      font-size: 3.8rem;
      display: block;
      background: linear-gradient(135deg, #0a1a2e, #2a4a6a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .welcome-sub {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a3b5a;
      margin-top: 0.8rem;
      background: linear-gradient(135deg, #1a4b74, #2a6a8a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .welcome-desc {
      font-size: 1.1rem;
      color: #3a5a77;
      max-width: 550px;
      margin: 0.8rem auto 1.8rem;
      line-height: 1.9;
      font-weight: 500;
    }

    .subjects-showcase {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin: 1rem 0 2rem;
      max-width: 650px;
    }

    .subject-pill {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(4px);
      padding: 10px 22px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.95rem;
      color: #0a1a2e;
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .subject-pill:hover {
      transform: translateY(-3px) scale(1.05);
      background: white;
      border-color: #1a4b74;
      box-shadow: 0 8px 20px rgba(26, 75, 116, 0.12);
    }

    .subject-pill .emoji {
      font-size: 1.1rem;
    }

    .btn-hero {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      border: none;
      color: white;
      padding: 20px 65px;
      border-radius: 60px;
      font-weight: 800;
      font-size: 1.25rem;
      display: inline-flex;
      align-items: center;
      gap: 18px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 20px 50px -16px rgba(26, 51, 75, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.15);
      position: relative;
      overflow: hidden;
    }

    .btn-hero::before {
      content: '';
      position: absolute;
      top: -60%;
      left: -60%;
      width: 220%;
      height: 220%;
      background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%);
      pointer-events: none;
      transition: 0.6s;
    }

    .btn-hero:hover::before {
      transform: scale(1.2);
    }

    .btn-hero:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 30px 60px -18px #0a1a2e;
      background: linear-gradient(135deg, #0f2338, #1a3b5a);
    }

    .btn-hero:active {
      transform: scale(0.96);
    }

    .btn-hero .pulse {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.9); }
    }

    /* ============================================================ */
    /* ==================== SUBSCRIPTION PAGE ====================== */
    /* ============================================================ */

    .subscription-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1.8rem;
    }

    .subscription-header h1 {
      font-weight: 800;
      font-size: 1.7rem;
      color: #0a1a2e;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .subscription-header h1 i {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      color: white;
      padding: 12px 16px;
      border-radius: 50px;
      font-size: 1.2rem;
      box-shadow: 0 8px 18px -8px rgba(0, 20, 50, 0.3);
    }

    /* Subscriptions Grid */
    .subscriptions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin: 1.5rem 0;
    }

    .subscription-card {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      border-radius: 30px;
      padding: 2rem 1.8rem;
      border: 2px solid rgba(255, 255, 255, 0.5);
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .subscription-card:hover {
      transform: translateY(-8px) scale(1.02);
      border-color: #1a4b74;
      box-shadow: 0 20px 40px -12px rgba(26, 75, 116, 0.2);
      background: rgba(255, 255, 255, 0.8);
    }

    .subscription-card.popular {
      border-color: #f7c948;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(247, 201, 72, 0.08));
    }

    .subscription-card.popular::before {
      content: 'الأكثر طلباً';
      position: absolute;
      top: 12px;
      left: 12px;
      background: linear-gradient(135deg, #f7c948, #f5a623);
      color: #1a334b;
      padding: 4px 16px;
      border-radius: 30px;
      font-size: 0.7rem;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .sub-icon {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      display: inline-block;
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sub-icon.gold {
      background: linear-gradient(135deg, #f7c948, #f5a623);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sub-icon.premium {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .sub-name {
      font-size: 1.4rem;
      font-weight: 800;
      color: #0a1a2e;
      margin-bottom: 0.3rem;
    }

    .sub-price {
      font-size: 2.2rem;
      font-weight: 900;
      color: #1a334b;
      margin: 0.5rem 0;
    }

    .sub-price small {
      font-size: 0.9rem;
      font-weight: 500;
      color: #4a6a8a;
    }

    .sub-features {
      list-style: none;
      padding: 0;
      margin: 1rem 0 1.5rem;
      text-align: right;
    }

    .sub-features li {
      padding: 8px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.04);
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 500;
      color: #1a3b5a;
      font-size: 0.9rem;
    }

    .sub-features li:last-child {
      border-bottom: none;
    }

    .sub-features li i {
      color: #1a4b74;
      font-size: 0.8rem;
      width: 20px;
    }

    .sub-features li .fa-times {
      color: #e74c3c;
    }

    .sub-features li .fa-check {
      color: #27ae60;
    }

    .btn-subscribe {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      border: none;
      color: white;
      width: 100%;
      padding: 14px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .btn-subscribe:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px -10px rgba(26, 51, 75, 0.4);
      background: linear-gradient(135deg, #0f2338, #1a3b5a);
    }

    .btn-subscribe.gold {
      background: linear-gradient(135deg, #f7c948, #f5a623);
      color: #1a334b;
    }

    .btn-subscribe.gold:hover {
      background: linear-gradient(135deg, #f5a623, #e6951a);
      box-shadow: 0 12px 28px -10px rgba(247, 201, 72, 0.5);
    }

    .btn-subscribe.premium {
      background: linear-gradient(135deg, #e74c3c, #c0392b);
    }

    .btn-subscribe.premium:hover {
      background: linear-gradient(135deg, #c0392b, #a93226);
      box-shadow: 0 12px 28px -10px rgba(231, 76, 60, 0.5);
    }

    .sub-note {
      text-align: center;
      margin-top: 1.5rem;
      color: #4a6a8a;
      font-weight: 500;
      font-size: 0.9rem;
    }

    .sub-note i {
      color: #f7c948;
      margin-left: 6px;
    }

    /* ============================================================ */
    /* ==================== REGISTER PAGE ========================== */
    /* ============================================================ */

    .reg-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1.8rem;
    }

    .reg-header h1 {
      font-weight: 800;
      font-size: 1.7rem;
      color: #0a1a2e;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .reg-header h1 i {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      color: white;
      padding: 12px 16px;
      border-radius: 50px;
      font-size: 1.2rem;
      box-shadow: 0 8px 18px -8px rgba(0, 20, 50, 0.3);
    }

    .btn-back {
      background: rgba(255, 255, 255, 0.5);
      border: 2px solid rgba(26, 51, 75, 0.12);
      color: #1a334b;
      padding: 10px 24px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(4px);
    }

    .btn-back:hover {
      background: rgba(255, 255, 255, 0.8);
      border-color: #1a334b;
      transform: translateX(-4px);
    }

    .badge-gold {
      background: linear-gradient(135deg, #1f3349, #2a405a);
      color: #f5e7c8;
      padding: 8px 22px;
      border-radius: 50px;
      font-weight: 600;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid rgba(255, 215, 120, 0.15);
      box-shadow: 0 6px 14px -6px rgba(0, 0, 0, 0.15);
    }

    .badge-gold i {
      color: #f7c948;
    }

    /* steps */
    .steps {
      display: flex;
      gap: 6px;
      margin-bottom: 1.8rem;
      flex-wrap: wrap;
      background: rgba(255, 255, 255, 0.25);
      padding: 8px 14px;
      border-radius: 50px;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .step {
      padding: 6px 18px;
      border-radius: 50px;
      font-weight: 600;
      color: #4a6a8a;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.3s ease;
    }

    .step.active {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      color: white;
      box-shadow: 0 6px 16px -6px rgba(26, 51, 75, 0.35);
    }

    .step i {
      font-size: 0.85rem;
    }

    /* card panels */
    .card-panel {
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 30px;
      padding: 1.8rem 2rem 2rem;
      margin-bottom: 1.8rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 24px -12px rgba(0, 20, 50, 0.06);
      transition: transform 0.3s ease;
    }

    .card-panel:last-child {
      margin-bottom: 0;
    }

    .card-panel h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0a1a2e;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 2px solid rgba(180, 200, 220, 0.2);
      padding-bottom: 0.9rem;
      margin-bottom: 1.5rem;
    }

    .card-panel h2 i {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      color: white;
      padding: 8px 12px;
      border-radius: 50px;
      font-size: 1rem;
    }

    /* form */
    .input-group {
      margin-bottom: 1.3rem;
    }

    .input-group label {
      display: block;
      font-weight: 600;
      color: #0a1a2e;
      margin-bottom: 6px;
      font-size: 0.9rem;
    }

    .input-group label i {
      margin-left: 10px;
      color: #2a5a7a;
      width: 20px;
    }

    .input-group input,
    .input-group select {
      width: 100%;
      padding: 14px 20px;
      border: 2px solid #dce6f0;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.75);
      font-size: 0.95rem;
      transition: all 0.25s ease;
      outline: none;
      font-weight: 500;
      color: #0a1a2e;
    }

    .input-group input:focus,
    .input-group select:focus {
      border-color: #1a4b74;
      box-shadow: 0 0 0 6px rgba(26, 75, 116, 0.08);
      background: white;
    }

    .input-group input::placeholder {
      color: #8aa5c0;
      font-weight: 400;
    }

    .input-group select {
      appearance: none;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%231a4b74" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>');
      background-repeat: no-repeat;
      background-position: left 18px center;
      background-size: 16px;
      padding-left: 48px;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(135deg, #1a334b, #2a4a6a);
      border: none;
      color: white;
      width: 100%;
      padding: 16px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1.05rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 8px;
      box-shadow: 0 12px 28px -12px rgba(26, 51, 75, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 18px 36px -14px #0a1a2e;
      background: linear-gradient(135deg, #0f2338, #1a3b5a);
    }

    .btn-primary:active {
      transform: scale(0.97);
    }

    .btn-primary i {
      font-size: 1.1rem;
    }

    .subject-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin: 12px 0 8px;
    }

    .subject-check {
      background: rgba(255, 255, 255, 0.75);
      padding: 10px 16px;
      border-radius: 30px;
      border: 2px solid #dce6f0;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.25s ease;
      cursor: pointer;
    }

    .subject-check:hover {
      border-color: #1a4b74;
      background: #f5faff;
      transform: translateX(-3px);
      box-shadow: 0 4px 12px rgba(26, 75, 116, 0.06);
    }

    .subject-check input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: #1a4b74;
      cursor: pointer;
      flex-shrink: 0;
    }

    .subject-check label {
      font-weight: 600;
      color: #0a1a2e;
      cursor: pointer;
      flex: 1;
      font-size: 0.9rem;
    }

    .booking-scroll {
      max-height: 360px;
      overflow-y: auto;
      padding-left: 2px;
    }

    .booking-scroll::-webkit-scrollbar {
      width: 5px;
    }
    .booking-scroll::-webkit-scrollbar-track {
      background: #d3dfed;
      border-radius: 20px;
    }
    .booking-scroll::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #2a5a7e, #1a3b5a);
      border-radius: 20px;
    }

    .booking-item {
      background: rgba(255, 255, 255, 0.7);
      padding: 16px 20px;
      border-radius: 28px;
      margin-bottom: 12px;
      border: 1px solid #e7eef8;
      transition: all 0.25s ease;
      backdrop-filter: blur(4px);
    }

    .booking-item:hover {
      border-color: #b0c8dd;
      background: rgba(255, 255, 255, 0.85);
      transform: translateX(-4px);
      box-shadow: 0 4px 16px rgba(0, 20, 40, 0.06);
    }

    .booking-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .booking-title {
      font-weight: 700;
      color: #0a1a2e;
      font-size: 1.05rem;
    }

    .booking-meta {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
      font-size: 0.85rem;
      color: #3a5a77;
    }

    .booking-meta i {
      margin-left: 6px;
      color: #2a5a7a;
      width: 16px;
    }

    .status-tag {
      padding: 4px 14px;
      border-radius: 50px;
      font-size: 0.7rem;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .status-pending {
      background: #fff3cd;
      color: #856404;
      border: 1px solid #ffd970;
    }

    .status-approved {
      background: #d4edda;
      color: #155724;
      border: 1px solid #8fcaa6;
    }

    .booking-actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
      flex-wrap: wrap;
    }

    .booking-actions button {
      background: transparent;
      border: none;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 6px 14px;
      border-radius: 50px;
      transition: all 0.2s ease;
      color: #3f6483;
      border: 2px solid #dce6f0;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .booking-actions .approve-btn {
      color: #1f6d4a;
      border-color: #9fc7b2;
      background: rgba(31, 109, 74, 0.04);
    }
    .booking-actions .approve-btn:hover {
      background: #e1f3e9;
      border-color: #5a9a7a;
      transform: scale(1.02);
    }

    .booking-actions .delete-btn {
      color: #b1424a;
      border-color: #f0cfd2;
      background: rgba(177, 66, 74, 0.04);
    }
    .booking-actions .delete-btn:hover {
      background: #fde7ea;
      border-color: #d48a92;
      transform: scale(1.02);
    }

    .empty-state {
      text-align: center;
      padding: 2rem 0.5rem;
      color: #4e6f8c;
    }
    .empty-state i {
      font-size: 3rem;
      opacity: 0.2;
      display: block;
      margin-bottom: 12px;
      color: #1a334b;
    }
    .empty-state p {
      font-weight: 500;
      font-size: 1rem;
    }

    .admin-note {
      margin-top: 18px;
      padding: 14px 20px;
      background: linear-gradient(135deg, #e8eef7, #dce6f2);
      border-radius: 30px;
      font-size: 0.85rem;
      color: #0a2a4a;
      display: flex;
      align-items: center;
      gap: 14px;
      border-right: 4px solid #1a4b74;
      font-weight: 500;
    }

    .admin-note i {
      font-size: 1.3rem;
      color: #1a4b74;
    }

    .footer-note {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.8rem;
      color: #5a7a97;
      font-weight: 500;
      opacity: 0.6;
    }

    /* ========== RESPONSIVE ========== */
    @media (max-width: 750px) {
      .main-container {
        padding: 1.8rem 1.5rem;
        border-radius: 40px;
      }

      .welcome-title {
        font-size: 2.2rem;
      }
      .welcome-title .big {
        font-size: 2.6rem;
      }
      .welcome-sub {
        font-size: 1.2rem;
      }
      .welcome-desc {
        font-size: 0.95rem;
      }
      .btn-hero {
        padding: 16px 40px;
        font-size: 1.05rem;
      }
      .subject-pill {
        padding: 8px 16px;
        font-size: 0.8rem;
      }

      .subscriptions-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .reg-header h1 {
        font-size: 1.3rem;
      }
      .subject-grid {
        grid-template-columns: 1fr;
      }
      .steps {
        padding: 6px 10px;
      }
      .step {
        padding: 4px 12px;
        font-size: 0.7rem;
      }
      .card-panel {
        padding: 1.2rem 1.2rem 1.5rem;
      }
      .badge-gold {
        font-size: 0.75rem;
        padding: 6px 14px;
      }
    }

    @media (max-width: 480px) {
      .main-container {
        padding: 1rem 0.8rem;
        border-radius: 30px;
      }
      .welcome-title {
        font-size: 1.6rem;
      }
      .welcome-title .big {
        font-size: 2rem;
      }
      .welcome-sub {
        font-size: 1rem;
      }
      .btn-hero {
        padding: 14px 28px;
        font-size: 0.9rem;
        gap: 12px;
      }
      .subject-pill {
        padding: 6px 12px;
        font-size: 0.7rem;
      }
      .subscription-card {
        padding: 1.5rem 1.2rem;
      }
      .sub-price {
        font-size: 1.8rem;
      }
      .reg-header h1 {
        font-size: 1rem;
      }
      .reg-header h1 i {
        padding: 8px 12px;
        font-size: 0.9rem;
      }
      .btn-back {
        padding: 6px 14px;
        font-size: 0.7rem;
      }
    }
  </style>
</head>
<body>

  <div class="main-container">
    <!-- Background decorations -->
    <div class="bg-circle c1"></div>
    <div class="bg-circle c2"></div>

    <!-- ==================== PAGE 1: WELCOME ==================== -->
    <div class="page active" id="welcomePage">
      <div class="welcome-content">
        <div class="welcome-badge">
          <i class="fas fa-star"></i>
          نظام التسجيل الإلكتروني 2026
          <i class="fas fa-star"></i>
        </div>

        <h1 class="welcome-title">
          <span class="big">مرحباً بك</span>
          <span>في عالمنا معانا</span>
          <span class="highlight">هاتضمن الـ Full Mark</span>
          <span style="font-size:0.6em; display:block; color:#4a6a8a; -webkit-text-fill-color:#4a6a8a;">في أي امتحان</span>
        </h1>

        <p class="welcome-sub">
          <i class="fas fa-graduation-cap" style="margin-left:10px;"></i>
          اختر موادك وابدأ رحلة التفوق
        </p>

        <p class="welcome-desc">
          سجل في المواد التي ترغب في أداء امتحانها
          <br>وانتظر موافقة المدير على طلبك
        </p>

        <div class="subjects-showcase">
          <span class="subject-pill"><span class="emoji">🧬</span> أحياء</span>
          <span class="subject-pill"><span class="emoji">⚗️</span> كيمياء</span>
          <span class="subject-pill"><span class="emoji">📖</span> عربي</span>
          <span class="subject-pill"><span class="emoji">🇬🇧</span> إنجليزي</span>
          <span class="subject-pill"><span class="emoji">🌍</span> جغرافيا</span>
          <span class="subject-pill"><span class="emoji">🏛️</span> تاريخ</span>
          <span class="subject-pill"><span class="emoji">📊</span> إحصاء</span>
          <span class="subject-pill"><span class="emoji">🇫🇷</span> فرنساوي</span>
        </div>

        <button class="btn-hero" id="goToSubscriptionBtn">
          <i class="fas fa-arrow-left"></i>
          اشترك الآن
          <i class="fas fa-crown pulse"></i>
        </button>
      </div>
    </div>

    <!-- ==================== PAGE 2: SUBSCRIPTIONS ==================== -->
    <div class="page" id="subscriptionPage">
      <div class="subscription-header">
        <h1><i class="fas fa-crown"></i> باقات الاشتراك</h1>
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <span class="badge-gold"><i class="fas fa-star"></i> 2025-2026</span>
          <button class="btn-back" id="backToWelcomeFromSubBtn">
            <i class="fas fa-arrow-right"></i> العودة
          </button>
        </div>
      </div>

      <div class="subscriptions-grid">
        <!-- Basic Plan -->
        <div class="subscription-card">
          <div class="sub-icon"><i class="fas fa-gem"></i></div>
          <div class="sub-name">الباقة الأساسية</div>
          <div class="sub-price">مجاني <small>/ شهرياً</small></div>
          <ul class="sub-features">
            <li><i class="fas fa-check"></i> تسجيل 3 مواد</li>
            <li><i class="fas fa-check"></i> متابعة الطلبات</li>
            <li><i class="fas fa-times"></i> أولوية الموافقة</li>
            <li><i class="fas fa-times"></i> دعم فني مميز</li>
          </ul>
          <button class="btn-subscribe" onclick="alert('✅ تم الاشتراك في الباقة الأساسية مجاناً!')">
            <i class="fas fa-check"></i> اشترك مجاناً
          </button>
        </div>

        <!-- Gold Plan -->
        <div class="subscription-card popular">
          <div class="sub-icon gold"><i class="fas fa-crown"></i></div>
          <div class="sub-name">الباقة الذهبية</div>
          <div class="sub-price">99 ر.س <small>/ شهرياً</small></div>
          <ul class="sub-features">
            <li><i class="fas fa-check"></i> تسجيل 8 مواد</li>
            <li><i class="fas fa-check"></i> متابعة الطلبات</li>
            <li><i class="fas fa-check"></i> أولوية الموافقة</li>
            <li><i class="fas fa-check"></i> دعم فني 24/7</li>
          </ul>
          <button class="btn-subscribe gold" onclick="alert('⭐ تم الاشتراك في الباقة الذهبية! تم خصم 99 ر.س')">
            <i class="fas fa-crown"></i> اشترك الآن
          </button>
        </div>

        <!-- Premium Plan -->
        <div class="subscription-card">
          <div class="sub-icon premium"><i class="fas fa-rocket"></i></div>
          <div class="sub-name">الباقة البريميوم</div>
          <div class="sub-price">199 ر.س <small>/ شهرياً</small></div>
          <ul class="sub-features">
            <li><i class="fas fa-check"></i> تسجيل غير محدود</li>
            <li><i class="fas fa-check"></i> متابعة الطلبات</li>
            <li><i class="fas fa-check"></i> أولوية الموافقة</li>
            <li><i class="fas fa-check"></i> دعم فني VIP</li>
          </ul>
          <button class="btn-subscribe premium" onclick="alert('🚀 تم الاشتراك في الباقة البريميوم! تم خصم 199 ر.س')">
            <i class="fas fa-rocket"></i> اشترك الآن
          </button>
        </div>
      </div>

      <div class="sub-note">
        <i class="fas fa-shield-alt"></i>
        جميع الباقات آمنة · يمكنك تغيير أو إلغاء الاشتراك في أي وقت
        <i class="fas fa-shield-alt" style="margin-right:6px;"></i>
      </div>

      <div style="text-align:center; margin-top: 2rem;">
        <button class="btn-hero" id="goToRegisterFromSubBtn" style="padding:14px 40px; font-size:1rem;">
          <i class="fas fa-arrow-left"></i>
          ابدأ حجز الآن
          <i class="fas fa-pen-fancy"></i>
        </button>
      </div>
    </div>

    <!-- ==================== PAGE 3: REGISTRATION ==================== -->
    <div class="page" id="registerPage">

      <!-- header -->
      <div class="reg-header">
        <h1><i class="fas fa-user-graduate"></i> تسجيل الامتحانات</h1>
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <span class="badge-gold"><i class="fas fa-star"></i> 2025-2026</span>
          <button class="btn-back" id="backToSubscriptionBtn">
            <i class="fas fa-arrow-right"></i> العودة للاشتراكات
          </button>
        </div>
      </div>

      <!-- steps -->
      <div class="steps">
        <span class="step active"><i class="fas fa-user"></i> بيانات</span>
        <span class="step"><i class="fas fa-layer-group"></i> القسم</span>
        <span class="step"><i class="fas fa-book"></i> المواد</span>
        <span class="step"><i class="fas fa-check-circle"></i> الموافقة</span>
      </div>

      <!-- form panel -->
      <div class="card-panel">
        <h2><i class="fas fa-pen-fancy"></i> نموذج التسجيل</h2>
        <form id="registrationForm">
          <div class="input-group">
            <label for="studentName"><i class="fas fa-user"></i> اسم الطالب (ثلاثي)</label>
            <input type="text" id="studentName" placeholder="مثال: أحمد محمد علي" required>
          </div>
          <div class="input-group">
            <label for="studentPhone"><i class="fas fa-phone-alt"></i> رقم الهاتف</label>
            <input type="tel" id="studentPhone" placeholder="05xxxxxxxx" required>
          </div>
          <div class="input-group">
            <label for="majorSelect"><i class="fas fa-layer-group"></i> القسم</label>
            <select id="majorSelect" required>
              <option value="" disabled selected>-- اختر القسم --</option>
              <option value="علمي">علمي (علوم + رياضيات)</option>
              <option value="ادبي">أدبي (فلسفة + تاريخ + جغرافيا)</option>
            </select>
          </div>

          <div>
            <label style="font-weight:700; color:#0a1a2e; display:block; margin-bottom:6px; font-size:0.9rem;">
              <i class="fas fa-book" style="margin-left:10px; color:#2a5a7a;"></i> المواد الأساسية
            </label>
            <div id="subjectCheckboxes" class="subject-grid"></div>
            <small style="color:#4a6a8a; display:block; margin-top:8px; font-weight:500;">* اختر مادة أو أكثر</small>
          </div>

          <button type="submit" class="btn-primary">
            <i class="fas fa-paper-plane"></i> إرسال الطلب
          </button>
        </form>

        <div class="admin-note">
          <i class="fas fa-shield-alt"></i>
          <span><strong>ملاحظة:</strong> الطلب ينتظر موافقة المدير الأول.</span>
        </div>
      </div>

      <!-- requests list panel -->
      <div class="card-panel">
        <div class="list-header" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; border-bottom:2px solid rgba(180,200,220,0.2); padding-bottom:0.9rem; margin-bottom:1.3rem;">
          <h2 style="border-bottom:none; padding-bottom:0; margin-bottom:0; font-size:1.25rem; font-weight:700; color:#0a1a2e; display:flex; align-items:center; gap:12px;">
            <i class="fas fa-clipboard-list" style="background:linear-gradient(135deg, #1a334b, #2a4a6a); color:white; padding:8px 12px; border-radius:50px; font-size:1rem;"></i>
            الطلبات المسجلة
          </h2>
          <span class="count-badge" style="background:linear-gradient(135deg, #1a334b, #2a4a6a); color:white; padding:6px 18px; border-radius:50px; font-size:0.85rem; font-weight:600; display:flex; align-items:center; gap:10px; box-shadow:0 4px 12px -4px rgba(26,51,75,0.25);">
            <i class="fas fa-file-signature"></i> <span id="bookingCounter">0</span>
          </span>
        </div>

        <div class="booking-scroll" id="bookingListContainer">
          <div class="empty-state" id="emptyState">
            <i class="fas fa-calendar-times"></i>
            <p>لا توجد طلبات</p>
          </div>
          <div id="bookingList"></div>
        </div>
      </div>

      <div class="footer-note">
        <i class="fas fa-lock" style="margin-left:6px;"></i>
        نظام آمن · جميع الحقوق محفوظة © 2026
      </div>
    </div>

  </div>

  <script>
    (function() {
      "use strict";

      // ===== PAGE NAVIGATION =====
      const welcomePage = document.getElementById('welcomePage');
      const subscriptionPage = document.getElementById('subscriptionPage');
      const registerPage = document.getElementById('registerPage');

      const goToSubscriptionBtn = document.getElementById('goToSubscriptionBtn');
      const backToWelcomeFromSubBtn = document.getElementById('backToWelcomeFromSubBtn');
      const goToRegisterFromSubBtn = document.getElementById('goToRegisterFromSubBtn');
      const backToSubscriptionBtn = document.getElementById('backToSubscriptionBtn');

      function showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      goToSubscriptionBtn.addEventListener('click', () => showPage('subscriptionPage'));
      backToWelcomeFromSubBtn.addEventListener('click', () => showPage('welcomePage'));
      goToRegisterFromSubBtn.addEventListener('click', () => {
        showPage('registerPage');
        setTimeout(() => document.getElementById('studentName').focus(), 300);
      });
      backToSubscriptionBtn.addEventListener('click', () => showPage('subscriptionPage'));

      // ===== REGISTRATION LOGIC =====
      let requests = [];

      const subjectMap = {
        'علمي': ['الرياضيات', 'الفيزياء', 'الكيمياء', 'الأحياء'],
        'ادبي': ['اللغة العربية', 'التاريخ', 'الجغرافيا', 'الفلسفة']
      };

      const form = document.getElementById('registrationForm');
      const studentName = document.getElementById('studentName');
      const studentPhone = document.getElementById('studentPhone');
      const majorSelect = document.getElementById('majorSelect');
      const subjectContainer = document.getElementById('subjectCheckboxes');
      const bookingListEl = document.getElementById('bookingList');
      const emptyState = document.getElementById('emptyState');
      const bookingCounter = document.getElementById('bookingCounter');

      function renderSubjects(major) {
        subjectContainer.innerHTML = '';
        const subjects = subjectMap[major] || [];
        if (subjects.length === 0) {
          subjectContainer.innerHTML = '<p style="color:#4a6a8a; font-weight:500; padding:8px 0;">اختر القسم أولاً</p>';
          return;
        }
        subjects.forEach(sub => {
          const div = document.createElement('div');
          div.className = 'subject-check';
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.value = sub;
          checkbox.id = 'sub_' + sub;
          const label = document.createElement('label');
          label.htmlFor = 'sub_' + sub;
          label.textContent = sub;
          div.appendChild(checkbox);
          div.appendChild(label);
          subjectContainer.appendChild(div);
        });
      }

      majorSelect.addEventListener('change', function() {
        renderSubjects(this.value);
      });

      renderSubjects('');

      function renderRequests() {
        bookingListEl.innerHTML = '';

        if (requests.length === 0) {
          emptyState.style.display = 'block';
          bookingCounter.textContent = '0';
          return;
        }

        emptyState.style.display = 'none';
        bookingCounter.textContent = requests.length;

        const sorted = [...requests].reverse();

        sorted.forEach((req, idx) => {
          const originalIndex = requests.length - 1 - idx;

          const item = document.createElement('div');
          item.className = 'booking-item';

          const infoDiv = document.createElement('div');
          infoDiv.className = 'booking-info';

          const titleSpan = document.createElement('span');
          titleSpan.className = 'booking-title';
          titleSpan.textContent = req.student;

          const metaDiv = document.createElement('div');
          metaDiv.className = 'booking-meta';
          const statusClass = req.approved ? 'status-approved' : 'status-pending';
          const statusText = req.approved ? 'موافق عليه' : 'قيد المراجعة';
          const statusIcon = req.approved ? 'fa-check-circle' : 'fa-clock';
          metaDiv.innerHTML = `
            <span><i class="fas fa-phone"></i> ${req.phone}</span>
            <span><i class="fas fa-layer-group"></i> ${req.major}</span>
            <span><i class="fas fa-book"></i> ${req.subjects.join('، ')}</span>
            <span class="status-tag ${statusClass}"><i class="fas ${statusIcon}"></i> ${statusText}</span>
          `;

          infoDiv.appendChild(titleSpan);
          infoDiv.appendChild(metaDiv);

          const actionsDiv = document.createElement('div');
          actionsDiv.className = 'booking-actions';

          if (!req.approved) {
            const approveBtn = document.createElement('button');
            approveBtn.className = 'approve-btn';
            approveBtn.innerHTML = '<i class="fas fa-check"></i> قبول (مدير)';
            approveBtn.addEventListener('click', function(e) {
              e.stopPropagation();
              if (confirm(`هل توافق على طلب "${req.student}"؟`)) {
                requests[originalIndex].approved = true;
                renderRequests();
              }
            });
            actionsDiv.appendChild(approveBtn);
          }

          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'delete-btn';
          deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> حذف';
          deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (confirm(`حذف طلب "${req.student}"؟`)) {
              requests.splice(originalIndex, 1);
              renderRequests();
            }
          });
          actionsDiv.appendChild(deleteBtn);

          if (req.approved) {
            const revokeBtn = document.createElement('button');
            revokeBtn.className = 'delete-btn';
            revokeBtn.style.borderColor = '#f0cfd2';
            revokeBtn.innerHTML = '<i class="fas fa-undo-alt"></i> إلغاء الموافقة';
            revokeBtn.addEventListener('click', function(e) {
              e.stopPropagation();
              if (confirm(`إلغاء الموافقة عن طلب "${req.student}"؟`)) {
                requests[originalIndex].approved = false;
                renderRequests();
              }
            });
            actionsDiv.appendChild(revokeBtn);
          }

          item.appendChild(infoDiv);
          item.appendChild(actionsDiv);
          bookingListEl.appendChild(item);
        });
      }

      function addRequest(event) {
        event.preventDefault();

        const name = studentName.value.trim();
        const phone = studentPhone.value.trim();
        const major = majorSelect.value;
        const checkboxes = subjectContainer.querySelectorAll('input[type="checkbox"]:checked');
        const selectedSubjects = Array.from(checkboxes).map(cb => cb.value);

        if (!name || !phone || !major) {
          alert('يرجى ملء جميع الحقول: الاسم، الهاتف، القسم.');
          return;
        }
        if (selectedSubjects.length === 0) {
          alert('يرجى اختيار مادة واحدة على الأقل.');
          return;
        }

        const duplicate = requests.some(r => r.student === name && r.phone === phone);
        if (duplicate) {
          alert('يوجد طلب مسجل بنفس الاسم ورقم الهاتف.');
          return;
        }

        requests.push({
          student: name,
          phone: phone,
          major: major,
          subjects: selectedSubjects,
          approved: false
        });

        renderRequests();

        form.reset();
        majorSelect.value = '';
        renderSubjects('');
        studentName.focus();

        alert('✅ تم تسجيل الطلب بنجاح! ينتظر الموافقة.');
      }

      form.addEventListener('submit', addRequest);

      // ===== SAMPLE DATA =====
      (function loadSample() {
        if (requests.length === 0) {
          requests = [
            { student: 'أحمد محمد علي', phone: '0555123456', major: 'علمي', subjects: ['الرياضيات', 'الفيزياء'], approved: false },
            { student: 'سارة خالد حسن', phone: '0555987654', major: 'ادبي', subjects: ['اللغة العربية', 'التاريخ'], approved: true },
            { student: 'محمد يوسف رضا', phone: '0555234567', major: 'علمي', subjects: ['الكيمياء', 'الأحياء'], approved: false },
          ];
          renderRequests();
        }
      })();

    })();
  </script>

</body>
</html>
