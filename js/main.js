const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao Mondo!',
        insert_image: "https://images.unsplash.com/2/06.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
    }
  }).mount('#app')