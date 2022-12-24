student_array=[]

function Submit(){
    name1=document.getElementById('student1').value
    name2=document.getElementById('student2').value
    name3=document.getElementById('student3').value
    name4=document.getElementById('student4').value

    student_array.push(name1)
    student_array.push(name2)
    student_array.push(name3)
    student_array.push(name4)

    document.getElementById('output').innerHTML=student_array

}
function Sorting(){
    document.getElementById('output').innerHTML=student_array.sort()
}