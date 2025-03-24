<script setup lang="ts">

const showSend = ref(true);
const checkbox = ref(false);
const contactFormData = ref({
    email: '',
    title: '',
    phone: '',
    body: ''
  }) 

const submit = () => {
    // Make a POST request to the specified URL
    fetch('https://platformadlaenergii.pl/ec/api/usermgmt/members/contactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactFormData.value)
    })
            .then(response => {
              if (response.ok) {
                // Handle success
                console.log('Form submitted successfully');
                // You can add further actions here upon successful submission
              } else {
                // Handle errors
                console.log('Form submission failed');
              }
            })
            .catch(error => {
              console.error('Error:', error);
            })
            .finally(() => {
              contactFormData.value = {
                email: '',
                title: '',
                phone: '',
                body: ''
            }
              showSend.value=false;
            });
  }


</script>

<template>

<footer class="bg-[#0D2170] flex flex-col gap-9 sm:gap-15 py-10 px-5 text-white sm:p-15 xl:p-20">
  <div class="w-full flex flex-col gap-9 sm:gap-15">
    <div class="w-full flex flex-col gap-5 items-center">
      <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">Zostaw nam swoje dane, a skontaktujemy sie z Tobą</h2>
      <span class="text-base">Odbiór prezentu jest zgodny z <span class="text-[#A2C6FF]">Regulaminem</span></span>
    </div>

    <form id="contactForm" @submit.prevent="submit" class="text-base flex flex-col lg:flex-row justify-between gap-8 lg:gap-30">
      <div class="flex flex-col gap-8 flex-1">
        <div class="formRow">
          <label for="title">Imię i nazwisko lub nazwa<span class="text-red-600">*</span></label>
          <input type="text" id="title" name="title" placeholder="Wpisz..." required v-model="contactFormData.title" class="h-[40px] mt-3 w-full border-b border-[#A2C6FF]">
        </div>
        <div class="formRow">
          <label for="phone">Numer telefonu<span class="text-red-600">*</span></label>
          <input type="tel" id="phone" name="phone" placeholder="Wpisz..." required v-model="contactFormData.phone" class="h-[40px] mt-3 w-full border-b border-[#A2C6FF]">
        </div>
        <div class="formRow">
          <label for="email">Email<span class="text-red-600">*</span></label>
          <input type="email" id="email" name="email" placeholder="Wpisz..." required v-model="contactFormData.email" class="h-[40px] mt-3 w-full border-b border-[#A2C6FF]">
        </div>
      </div>
      <div class="flex flex-col gap-8 flex-1">
        <div class="formRow area">
          <label for="body">Wiadomość</label>
          <textarea id="body" name="body" rows="4" v-model="contactFormData.body" class="h-[80px] mt-3 w-full border-b border-[#A2C6FF]"></textarea>
        </div>
        <span id="terms" class="flex gap-2 items-center">
            <input type="checkbox" id="ch" name="terms" required v-model="checkbox" class="w-[22px] h-[22px]">
            <label for="ch">Wypełniając formularz zgadzasz się na <b>Politykę Prywatności</b></label>
        </span>
        <div id="sender" class="flex flex-col gap-3 justify-between">
          <button class="w-full max-w-[400px] bg-white font-medium rounded-3xl text-black py-3" type=submit id="sendBtn" v-if="showSend" :disabled="!checkbox">
            Wyślij
          </button>
          <div id="contactSuccess" v-else>
            Formularz wysłano poprawnie!
          </div>
          <p>Możesz również skontaktowac się z nami pod numerem <span class="font-medium">+48 668 420 820</span></p>
        </div>
      </div>


    </form>
  </div>
  <div id="finish">
    <img src="/images/logoWhite.svg" class="h-[50px]" alt="logo" decoding="async" height="50">
    <p class="text-sm mt-3">© Platforma dla energii 2025. All rights reserved.</p>
  </div>
</footer>

</template>

<style scoped></style>
