export const saveLoginInfo = defineStore('saveLoginInfo', {
    state: () => {
        return {
            user: {
                username: null,
                email: null,
                role: null,
                token: null,
                refresh: null,
                logged: false,
                error:false,
                code:null,
                message: null
            }
        }
    },
    actions: {
        saveLoginData(user){
            this.user.username = user.username
            this.user.email = user.email
            this.user.role = user.role
            this.user.token = user.token
            this.user.refresh = user.refresh
            this.user.logged = true
            this.user.code = null
            this.user.message = null,
            this.user.error = false
        },
        seterror(code, message){
            this.user.code = code
            this.user.message = message,
            this.user.error = true
        }
    }
})
