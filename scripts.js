const app = Vue.createApp({
    data() {
        return {
            firstName: 'Olga',
            lastName: 'Zhevtuna',
            email: 'olga_zevtuna@inbox.lv',
            gender: 'female',
            picture: './guy.jpeg'
        }
    },
    methods: {
        async getUser() {
            const user = await fetch('https://randomuser.me/api');
            const data = await user.json();
            this.firstName =  data.results[0].name.first,
            this.lastName =  data.results[0].name.last,
            this.email =  data.results[0].email,
            this.gender = data.results[0].gender,
            this.picture =  data.results[0].picture.large
        }
    }
})

app.mount('#app');