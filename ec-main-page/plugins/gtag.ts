export default defineNuxtPlugin(() => {
    if (process.client) {
      // Load the Google Analytics script dynamically
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VFZE8EYXRR';
      document.head.appendChild(script);
  
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any) {
        window.dataLayer.push(args);
      }
      
      gtag('js', new Date());
      gtag('config', 'G-VFZE8EYXRR');
  
      // Attach gtag to the window object
      (window as any).gtag = gtag;
    }
  });
  