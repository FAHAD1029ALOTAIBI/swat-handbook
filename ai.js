const aiKnowledge = [

{
keywords:[
"من قائد السوات",
"قائد السوات",
"قائد swat",
"رئيس السوات",
"مين قائد السوات"
],
answer:"قائد SWAT هو فهد المطيري."
},

{
keywords:[
"من نائب قائد السوات",
"نائب السوات",
"نائب قائد swat",
"مين نائب القائد"
],
answer:"نائب قائد SWAT هو كارلوس المطيري."
},

{
keywords:[
"من وزير الداخلية",
"وزير الداخلية",
"الوزير"
],
answer:"وزير الداخلية هو راشد سعد."
},

{
keywords:[
"نائب وزير الداخلية",
"من نائب الوزير"
],
answer:"نائب وزير الداخلية هو مايكل آرثر."
},

{
keywords:[
"رئيس spd",
"من رئيس الشرطة",
"رئيس الشرطة"
],
answer:"رئيس SPD هو آرثر رين."
},

{
keywords:[
"كم عدد أعضاء السوات",
"عدد أعضاء swat",
"عدد السوات"
],
answer:"عدد أعضاء SWAT هو 12 عضواً."
},

{
keywords:[
"اعضاء الفا",
"alpha",
"من هم alpha"
],
answer:"أعضاء Alpha هم: John Marly - Mov Marley - Syker Exxon - Marcus Leno."
},

{
keywords:[
"اعضاء برافو",
"bravo",
"من هم bravo"
],
answer:"أعضاء Bravo هم: ريان خالد - James Kruise - Older Mohammed - Badr Al-Mutairi."
},

{
keywords:[
"وظيفة السوات",
"مهام السوات",
"وش وظيفة swat"
],
answer:"مهمة SWAT هي مداهمة العصابات، تنفيذ العمليات الخاصة، تحرير الرهائن، دعم الشرطة، والقضاء على التهديدات الخطيرة."
},

{
keywords:[
"وظيفة الاستخبارات",
"مهام الاستخبارات"
],
answer:"مهمة الاستخبارات هي جمع المعلومات، مراقبة المطلوبين، تنفيذ العمليات السرية، ورفع التقارير السرية."
},

{
keywords:[
"وظيفة الشرطة",
"مهام الشرطة",
"spd"
],
answer:"مهمة SPD هي حفظ الأمن، حماية المواطنين، القبض على المطلوبين، وتنفيذ الأنظمة."
},

{
keywords:[
"شروط الترقية",
"كيف اترقى"
],
answer:"تتم الترقية بعد الوصول إلى عدد البوينتات المطلوبة."
},

{
keywords:[
"كيف اطلب دعم",
"طلب دعم"
],
answer:"يتم طلب الدعم حسب البروتوكولات العسكرية."
},

{
keywords:[
"كيف ارفع تقرير",
"رفع تقرير"
],
answer:"يتم رفع التقرير عن طريق المشرف المباشر."
},

{
keywords:[
"اللبس الرسمي",
"لبس السوات"
],
answer:"راجع صفحة اللبس داخل التطبيق."
},

{
keywords:[
"قوانين السوات",
"قوانين swat"
],
answer:"راجع صفحة قوانين SWAT داخل التطبيق."
},

{
keywords:[
"اكواد",
"الاكواد العسكرية"
],
answer:"راجع صفحة الأكواد داخل التطبيق."
}

];

function askAI(){

const input=document.getElementById("userQuestion");
const chat=document.getElementById("chatBox");

const question=input.value.trim();

if(question==="") return;

chat.innerHTML+=`
<div style="text-align:right;margin:10px 0;">
<b>أنت:</b> ${question}
</div>
`;

let answer="لا توجد معلومات مسجلة عن ذلك.";

const q=question.toLowerCase();

for(const item of aiKnowledge){

for(const key of item.keywords){

if(q.includes(key.toLowerCase())){

answer=item.answer;
break;

}

}

if(answer!=="لا توجد معلومات مسجلة عن ذلك.") break;

}

chat.innerHTML+=`
<div style="text-align:left;margin:10px 0;color:#d8c27a;">
<b>AI:</b> ${answer}
</div>
`;

chat.scrollTop=chat.scrollHeight;

input.value="";

}
