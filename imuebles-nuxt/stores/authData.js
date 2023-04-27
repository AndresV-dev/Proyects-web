export const saveLoginInfo = defineStore('saveLoginInfo', {
    state: () => {
        return {
            user: {
                nombre: "",
                email: "",
                role: "",
                token: ""
            }
        }
    },
    actions: {
        saveLoginData(user){
            this.user.nombre = user.nombre
            this.user.email = user.email
            this.user.role = user.role
            this.user.token = user.token
        }
    }
})
