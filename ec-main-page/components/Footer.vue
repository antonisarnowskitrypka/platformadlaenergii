<script setup lang="ts">
import {ref} from 'vue';

const showSend = ref(true);
const checkbox = ref(false);
const contactFormData = ref({
  email: '',
  title: '',
  phone: '',
  body: ''
})

const submit = () => {

  fetch('/api/saleswizard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(contactFormData.value)
  })
      .then(async response => {
        const responseData = await response.json();
        if (response.ok && responseData.success) {
          console.log(responseData.message);
        } else {
          const errorMessage = responseData.statusMessage || responseData.message || 'Nieznany błąd.';
          console.error('Wystąpił błąd podczas wysyłania formularza:', errorMessage);
          alert('Wystąpił błąd podczas wysyłania formularza: ' + errorMessage);
        }
      })
      .catch(error => {
        console.error('Nieznany błąd sieciowy lub błąd skryptu:', error);
        alert('Wystąpił nieznany błąd. Proszę spróbować później.');
      })
      .finally(() => {
        // Reset
        contactFormData.value = {
          email: '',
          title: '',
          phone: '',
          body: ''
        };
        checkbox.value = false;
        showSend.value = false;
      });
}
</script>

<template>
  <footer class="w-full bg-[#0D2170] flex flex-col gap-24 sm:gap-28 text-white py-10 px-10 sm:p-15 sm:px-26 xl:p-20 xl:px-32">
    <div class="w-full flex flex-col gap-[3.375rem] sm:gap-[5.625rem]">
      <div class="w-full flex flex-col gap-5 items-center">
        <h2 class="text-3xl sm:text-4xl font-medium text-center leading-10">
          Zostaw nam swoje dane, a skontaktujemy się z Tobą
        </h2>
      </div>

      <form id="contactForm" @submit.prevent="submit" class="text-base flex flex-col lg:flex-row justify-between gap-8 lg:gap-[11.25rem]">
        <div class="flex flex-col gap-8 flex-1">
          <div class="formRow">
            <label for="title">Imię i nazwisko lub nazwa<span class="text-red-600">*</span></label>
            <input
                type="text"
                id="title"
                name="title"
                placeholder="Wpisz..."
                required
                v-model="contactFormData.title"
                class="h-[40px] mt-3 w-full border-b border-[#A2C6FF] bg-transparent"
            />
          </div>
          <div class="formRow">
            <label for="phone">Numer telefonu<span class="text-red-600">*</span></label>
            <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Wpisz..."
                required
                v-model="contactFormData.phone"
                class="h-[40px] mt-3 w-full border-b border-[#A2C6FF] bg-transparent"
            />
          </div>
          <div class="formRow">
            <label for="email">Email<span class="text-red-600">*</span></label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Wpisz..."
                required
                v-model="contactFormData.email"
                class="h-[40px] mt-3 w-full border-b border-[#A2C6FF] bg-transparent"
            />
          </div>
        </div>

        <div class="flex flex-col flex-1">
          <div class="formRow area mb-1">
            <label for="body">Wiadomość</label>
            <textarea
                id="body"
                name="body"
                rows="4"
                v-model="contactFormData.body"
                placeholder="Wpisz..."
                class="h-[120px] mt-3 w-full border border-[#A2C6FF] bg-transparent p-2 rounded-md"
            ></textarea>
          </div>

          <span id="terms" class="flex gap-2 items-center mb-12">
            <input
                type="checkbox"
                id="ch"
                name="terms"
                required
                v-model="checkbox"
                class="w-[22px] h-[22px]"
            />
            <label for="ch">
              Wypełniając formularz zgadzasz się na
              <span @click.stop="navigateTo('/policy')" class="font-bold cursor-pointer text-blue-600 hover:underline">
                Politykę Prywatności
              </span>
            </label>
          </span>

          <div id="sender">
            <div v-if="showSend" class="flex items-center gap-x-4">
              <button
                  class="w-2/5 flex-shrink-0 bg-white hover:bg-gray-100 transition-colors duration-150 ease-in-out font-medium rounded-3xl text-black py-3 text-center"
                  type="submit"
                  id="sendBtn"
                  :disabled="!checkbox"
              >
                Wyślij
              </button>
              <p class="text-base flex-1 min-w-0">
                Możesz również skontaktować się z nami pod numerem <span class="font-medium">+48 668 420 820</span>
              </p>
            </div>
            <div id="contactSuccess" v-else class="text-white py-2.5">
              Formularz wysłano poprawnie!
            </div>
          </div>
        </div>
      </form>
    </div>

    <div id="finish" class="flex flex-wrap justify-between items-end gap-x-8 gap-y-6">
      <div class="flex items-end gap-4">
        <img src="/images/logoWhite.svg" class="h-[80px]" alt="logo" decoding="async" height="80" />
        <div class="text-sm">
          <p>Ovoo Energy Sp z o. o.</p>
          <p>Kalwaryjska 33,</p>
          <p>30-509 Kraków</p>
          <p>NIP: 6793224386</p>
        </div>
      </div>
      <p class="text-sm">© Platforma dla energii 2024. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped></style>
