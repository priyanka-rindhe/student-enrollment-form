

varjpdbBaseURL="http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml ";
var stdDBName="School-DB";
var stdRelationName ="Student-rel";
var connToken = "90932878|-31949282040235381|90947936";

function SaveRecNo2LS(jsonObj)
{
    var lvData=JSON.parse (jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no );
    
};

function getstdROLAsJsonObj()
{
    var stdno=$("#stdno").val();
    var jsonStr={
        NO:stdno
  };

function SaveData(){
    var jsonstrObj = validateData();
    if (jsonStrObj===""){
     return""; 
    }
    
}
    var putRequest=createPUTRequest(connToken,jsonStrObj,stdDBName,stdRelationName);
    jQuery.ajaxSetup({async:false});
    var reasJsonObj=executeCommandAtGivenBaseUrl(putRequest,jpdbBaseURL,jpdbIML);
    jQuery.ajaxSetup({asyn:true});
    resetForm();
    $("#stdno").focus();
    

function changeData(){
    $("#change").prop("enable",true);
    jsonchg=validateData();
    var updateRequest=createUPDATERecordRequest(connToken,jsonChg,stdDBName,stdRelationName,localStorage.getItem);
    jquery.ajaxSetup({async:false});
    var resJsonObj=executecommandAtGivenBaseUrl(updateRequest,jpdbBaseURL,jpdbIML);
    jQuery.ajaxSetup({async:true});
    console.log(resJsonObj);
    resetForm();
    $("#stdno").focus();
}


function getstd()
{
    var stdIDJsonObj= getstdnoAsJsonObj();
    var getRequest=createGET_BY_KEYRequest(connToken,stdDBName,stdRelationName,stdnoJsonObj);
    jQuery.ajaxSetup({async:false});
    var resJsonObj=executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
    jQuery.ajaxSetup({async:true});
    if(resJsonObj.status==400)
    {
        $("#save").prop("enable",false);
        $("#reset").prop("enable",false);
        $("#stdname").focus;
    }
    elseif (resJsonObj.status===200);
    {
        $("#stdno").prop("enable",true);
        fillData("resJsonObj");
        
        $("#change").prop("enable",false);
        $("reset").prop("enable",false);
        $("#stdname").focus;
    }
    


    function fillData(jsonObj)
 {
    SaveRecNo2LS(jsonObj);
    var record=JSON.parse(jsonObj.data).record;
    $("stdname").val(data.name);
    $("stdcls").val(data.class);
    $("stdbir").val(data.birthdate);
    $("stdadd").val(data.address);
    $("stdenrol").val(data.enrollmentdate);
}

function resetform()
{
    
 $("#stdno").val(" ");
 $("#stdname").val(" ");
 $("#stdcls").val(" ");
 $("#stdbir").val(" ");
 $("#stdadd").val(" ");
 $("#stdno").prop("enable",false);
 $("#SAVE").prop("enable",true);
 $("change").prop("enable",true);
 $("reset").prop("enable",true);
$("#stdno").focus();
} 


function validateData(){
    var stdrol,stdname,stdcls,stdbir,stdadd,stdenrol;
    empid=$("#stdrol").val();
    empid=$("#stdname").val();
     empid=$("#stdcls").val();
      empid=$("#stdbir").val();
       empid=$("#stdadd").val();
       empid=$("#stdenrol").val();
       
       
      if(stdrol==="")
      {
          alert("student roll no missing");
          $("#stdrol").focus();
          return"";
      }
      if(stdname==="")
      {
          alert("student Name missing");
          $("#stdname").focus();
          return"";
      }
      if(stdcls===""){
          alert("student class missing");
          $("#empsal").focus();
          return"";
      }
          if(stdbir==="")
          {
          alert("birth date missing");
          $("#stdbir").focus();
          return"";
      }
       if(stdadd==="")
       {
          alert("address missing");
          $("#stdadd").focus();
          return"";
      }
       if(stdenrol==="")
       {
          alert("enrollmentno  missing");
          $("#stdenrol").focus();
          return"";
      }
      var jsonStrObj={
          rollno :stdno,
          name:stdname,
          class:stdcls,
          birthdate:stdbir,
          address:stdadd,
          ebrollmentdate:stdenrol
         };
            return JSON.stringify(jsonStrObj);
      };
};
};
