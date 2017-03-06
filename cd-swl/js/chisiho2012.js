// JavaScript Document




/////////////产品搜索
function  emp(oInput){  
           if(oInput.eflag!=true){  
                       oInput.value="";  
                       oInput.eflag=true;  
           }  
}

////////////搜索文本框
function yw()
{
if(document.form1.cxz.value=="")
{
alert("请输入一个产品名称 | Enter a product name");
document.form1.cxz.focus();
return false;
}
}