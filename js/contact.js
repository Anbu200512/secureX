/* SecureX Contact - Site Survey Form Validation & Submission */

function loadSurveyRequests() {
  try {
    return JSON.parse(localStorage.getItem('securex_survey_requests')) || [];
  } catch (e) {
    return [];
  }
}

function saveSurveyRequest(data) {
  const requests = loadSurveyRequests();
  requests.push(data);
  localStorage.setItem('securex_survey_requests', JSON.stringify(requests));
}

function initSurveyForm() {
  const form = document.getElementById('survey-form');
  if (!form) return;

  const fields = {
    name: form.querySelector('#survey-name'),
    phone: form.querySelector('#survey-phone'),
    email: form.querySelector('#survey-email'),
    propertyType: form.querySelector('#survey-property-type'),
    date: form.querySelector('#survey-date'),
    time: form.querySelector('#survey-time'),
    address: form.querySelector('#survey-address'),
    requirement: form.querySelector('#survey-requirement')
  };

  function showError(input, message) {
    const errorEl = document.getElementById(input.id + '-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    input.classList.add('border-red-500', 'ring-1', 'ring-red-500');
    input.classList.remove('border-slate-200', 'dark:border-slate-700');
  }

  function clearError(input) {
    const errorEl = document.getElementById(input.id + '-error');
    if (errorEl) {
      errorEl.classList.add('hidden');
      errorEl.textContent = '';
    }
    input.classList.remove('border-red-500', 'ring-1', 'ring-red-500');
    input.classList.add('border-slate-200', 'dark:border-slate-700');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPhone(phone) {
    return /^[+()\-\s\d]{10,18}$/.test(phone);
  }

  function validateField(input) {
    const val = input.value.trim();
    const id = input.id;
    let valid = true;

    if (id === 'survey-name') {
      if (!val) { showError(input, 'Name is required'); valid = false; }
      else if (val.length < 2) { showError(input, 'Name must be at least 2 characters'); valid = false; }
      else clearError(input);
    }
    else if (id === 'survey-phone') {
      if (!val) { showError(input, 'Phone number is required'); valid = false; }
      else if (!isValidPhone(val)) { showError(input, 'Enter a valid phone number'); valid = false; }
      else clearError(input);
    }
    else if (id === 'survey-email') {
      if (!val) { showError(input, 'Email is required'); valid = false; }
      else if (!isValidEmail(val)) { showError(input, 'Enter a valid email address'); valid = false; }
      else clearError(input);
    }
    else if (id === 'survey-property-type') {
      if (!val) { showError(input, 'Select a property type'); valid = false; }
      else clearError(input);
    }
    else if (id === 'survey-date') {
      if (!val) { showError(input, 'Select a preferred date'); valid = false; }
      else {
        const selected = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selected < today) { showError(input, 'Date cannot be in the past'); valid = false; }
        else clearError(input);
      }
    }
    else if (id === 'survey-time') {
      if (!val) { showError(input, 'Select a preferred time'); valid = false; }
      else clearError(input);
    }
    else if (id === 'survey-address') {
      if (!val) { showError(input, 'Address is required'); valid = false; }
      else if (val.length < 10) { showError(input, 'Please enter the full address'); valid = false; }
      else clearError(input);
    }
    else if (id === 'survey-requirement') {
      if (!val) { showError(input, 'Please describe your security requirement'); valid = false; }
      else if (val.length < 20) { showError(input, 'Please provide more detail (at least 20 characters)'); valid = false; }
      else clearError(input);
    }

    return valid;
  }

  Object.values(fields).forEach(input => {
    if (input) {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('border-red-500')) validateField(input);
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allValid = true;

    Object.values(fields).forEach(input => {
      if (input && !validateField(input)) {
        allValid = false;
      }
    });

    if (allValid) {
      const data = {
        name: fields.name.value.trim(),
        phone: fields.phone.value.trim(),
        email: fields.email.value.trim(),
        propertyType: fields.propertyType.value,
        date: fields.date.value,
        time: fields.time.value,
        address: fields.address.value.trim(),
        requirement: fields.requirement.value.trim(),
        submittedAt: new Date().toISOString()
      };

      saveSurveyRequest(data);

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>Submitting...</span>';
      if (typeof lucide !== 'undefined') lucide.createIcons();

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        if (typeof lucide !== 'undefined') lucide.createIcons();

        form.reset();
        document.querySelectorAll('.form-error').forEach(el => el.classList.add('hidden'));

        showToast('Your free survey request was submitted successfully!', 'success');

        const successSection = document.getElementById('survey-success');
        if (successSection) {
          successSection.classList.remove('hidden');
          successSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => successSection.classList.add('hidden'), 8000);
        }
      }, 1200);
    } else {
      showToast('Please fix the errors in the form', 'error');
      const firstError = form.querySelector('.border-red-500');
      if (firstError) firstError.focus();
    }
  });

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const dateInput = fields.date;
  if (dateInput) {
    dateInput.min = minDate.toISOString().split('T')[0];
  }
}

/* Phone number formatting */
function initPhoneFormatting() {
  const phoneInput = document.getElementById('survey-phone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', () => {
    let value = phoneInput.value.replace(/[^\d+()-]/g, '');
    phoneInput.value = value;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initSurveyForm();
  initPhoneFormatting();
});
