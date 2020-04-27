;

var account_set_ops = {
    init:function(){
        this.eventBind()
    },
    eventBind:function(){
        $('.user_set_wrap .save').click(function(){

            var btn_target = $(this)
            if (btn_target.hasClass("disabled")){
                alert("正在处理，请稍后再试~~~")
                return;
            }

            var nickname_value = $(".user_set_wrap input[name=nickname]").val();
            var mobile_value = $(".user_set_wrap input[name=mobile]").val();
            var email_value = $(".user_set_wrap input[name=email]").val();
            var login_name_value = $(".user_set_wrap input[name=login_name]").val();
            var login_pwd_value = $(".user_set_wrap input[name=login_pwd]").val();

            if (!nickname_value || nickname_value.length < 2) {
                alert('请输入与规范的昵称')
                return false
            }
            if (!mobile_value || mobile_value.length != 11) {
                alert('请输入与规范的手机号')
                return false
            }

            if (!email_value || email_value.length < 2) {
                alert('请输入与规范的邮箱')
                return false
            }
            if (!login_name_value || login_name_value.length < 2) {
                alert('请输入与规范的登录名')
                return false
            }
            if (!login_pwd_value || login_pwd_value.length < 2) {
                alert('请输入与规范的密码')
                return false
            }

            btn_target.addClass("disabled");

            $.ajax({
                url:common_ops.buildUrl("/account/set"),
                type:"POST",
                data:{'nickname':nickname_value,'mobile':mobile_value,'email':email_value,'login_name_value':login_name_value,'login_pwd_value':login_pwd_value},
                dataType:'json',
                success:function(resp){
                    console.log(resp)
                    alert(resp.msg)
                    btn_target.removeClass("disabled");
                },
                error:function(error){
                    console.log(error)
                }
            })

        })
    }
}
$(document).ready(function(){
    account_set_ops.init
})