<template>
    <div  class="loginPage">
        <div class="login">
            <p class="login-head">登录</p>
            <div class="login-inputs">
                <input type="text" class="input" v-model="user.name"  placeholder="请输入用户名">
                <input type="password" class="input" v-model="user.password"  placeholder="请输入密码">
            </div>
            <div class="btn" @click = "login">登录</div>
            <div class="login-descript">
                ————  晚安地球人  ————
            </div>
      	</div>
    </div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return {
			user : {
				name : "",
				password : ""
			}
		}
	},
	components: {
		
	},
	methods : {
		login () {
			if (this.user.name && this.user.password) {
			var loginName = this.user.name;
			var loginPasw = this.user.password;
			this.$ajax({
				method: 'post',
				url: '/api/login',
				data: {
					name: loginName,
					password: loginPasw
				}
			}).then(function(res){
				console.log(res)
			})
			.catch(function(err){
				console.log(err)
			})
			}
			else console.log("用户名或密码不能为空！");
		}
	},
	created (){
		
	}
}
</script>

<style lang="scss">
@import "./../global/vars.scss";
.login {
    width: 300px;
    margin: 180px auto 0 auto;
    padding: 20px;
    background-color: white;
    box-shadow: $shadow;
    .login-head {
        display: inline-block;
        font-size: 1.2rem;
        color: $decorateColor ;
        border-bottom: 2px solid $decorateColor; 
        padding-bottom: 5px;
        margin: 20px 0;
    }
    .login-inputs {
        padding-bottom: 10px;
    }
    .btn {
        margin: 10px auto;
    }
    .login-descript {
        padding-bottom: 20px;
    }
}
</style>
