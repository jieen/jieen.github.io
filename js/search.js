
function  secinfo(n)
{
for(i=0;i<3;i++)
document.getElementById("info"+i).className="promenuout";
document.getElementById("info"+n).className="promenuon";
for(i=0;i<mainTable.tBodies.length;i++)
mainTable.tBodies[i].style.display="none";
mainTable.tBodies[n].style.display="block";

}
