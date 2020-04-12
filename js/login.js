$(function(){
  // 姓名判断
  $("#name").blur(function(){
    console.log($(this).val())
    if($(this).val()==''){
      $(".dangername").removeClass("disnone")
    }else{
       $(".dangername").addClass("disnone")
    }
  })
  // 身份证判断
  $("#idcard").blur(function(){
    console.log($(this).val())
    if($(this).val()==''){
      $(".dangeridcard").removeClass("disnone")
    }else{
       $(".dangeridcard").addClass("disnone")
    }
  })
  // 手机号判断判断
   $("#phone").blur(function(){
     console.log($(this).val());
    let res=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    let phone=$(this).val();
    //console.log(res.test(phone))
    if(!res.test(phone)){
        $(".dangerphone").removeClass("disnone");
        $(".dangerphone").html("请输入正确格式的手机号码");
     }else{
       $(".dangerphone").addClass("disnone")
    }
    // 判断该手机是否已经注册过
    // if(phone!=''){
    //       $.ajax({
    //         url:"",//请求地址,
    //         data:{
    //           // 数据
    //         },
    //         type:"post",
    //         success:function(res){
    //           console.log(res)
    //           if(res.code=="1"){
    //             $(".dangerphone").removeClass("disnone");
    //             $(".dangerphone").html("该手机号已注册");
    //           }
    //         }
    //       })
    //   }
  })
  //判断密码是否一致
  $(".password2").blur(function(){
    let psw=$(".password").val();
    let psw2=$(".password2").val();
    console.log(psw,psw2)
    if(psw!=psw2){
      $(".dangerpassword2").removeClass("disnone")
    }else{
      $(".dangerpassword2").addClass("disnone")
    }
  })
  var flg = false;
  $("#button").click(function(){
      if (flg) {
        return false
      }
      flg = true
      setTimeout(function () {//节流，防止多次提交重复表单
        let name=$("#name").val();
        let idcard=$("#idcard").val();
        let phone=$("#phone").val();
        let psw2=$(".password2").val();
        console.log(name,idcard,phone,psw2)
         // if(phone!='' && name！='' && idcard!='' && psw2!=''){
        //       $.ajax({
        //         url:"",//请求地址,
        //         data:{
        //           // 数据
        //         },
        //         type:"post",
        //         success:function(res){
        //           console.log(res)
        //           if(res.code=="1"){
        //             alert("注册成功")
        //           }
        //         }
        //       })
        //   }
        flg = false
      }, 3000)//时间可以改
  })
  $("#button2").click(function(){
      if (flg) {
        return false
      }
      flg = true
      setTimeout(function () {//节流，防止多次提交重复表单
        let marry=$('input:radio[name="marry"]:checked').val();//婚史
        let child=$('input:radio[name="child"]:checked').val();//生育
        let educational=$('input:radio[name="educational"]:checked').val();//学历
        let money=$('input:radio[name="money"]:checked').val();//月薪
        let work=$("#work option:selected").text();// 职业
        let xg=$('input:radio[name="xg"]:checked').val();//性格
        let face=$('input:radio[name="face"]:checked').val();//长相
        let sc=$('input:radio[name="sc"]:checked').val();//身材
        let home=$('input:radio[name="home"]:checked').val();//居住情况
        let province=$("#ddf option:selected").text();//故乡省份
        let city=$("#dds option:selected").text();//故乡城市
        let town=$("#ddc option:selected").text();//故乡区
        let nowprovince=$("#ddf1 option:selected").text();//现居省份
        let nowcity=$("#dds1 option:selected").text();//现居城市
        let nowtown=$("#ddc1 option:selected").text();//现居区
        let height1=$("#height1 option:selected").text();//身高
        console.log(marry,child,educational,money,work,xg,face,sc,home,province,city,town,nowprovince,nowtown,nowcity,height1)
         // if(请求条件){
        //       $.ajax({
        //         url:"",//请求地址,
        //         data:{
        //           // 数据
        //         },
        //         type:"post",
        //         success:function(res){
        //           console.log(res)
        //           if(res.code=="1"){
        //             alert("注册成功")
        //           }
        //         }
        //       })
        //   }
        flg = false
      }, 3000)//时间可以改
  })
})