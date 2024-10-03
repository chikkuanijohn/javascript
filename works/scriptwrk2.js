d=[{id:1,name:'anu',age:20,course:'python',date:'5/9/2024',email:'anu@123'},{id:2,name:'manu',age:30,course:'python',date:'4/9/2024',email:'manu@456'},{id:3,name:'sanu',age:40,course:'python',date:'6/9/2024',email:'sanu@222'}]
function display(){
    const t_var=document.querySelector('#peopleTable tbody')
    t_var.innerHTML=''
    d.forEach(element => {
        const t_row=document.createElement('tr')
        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.append(t_id)

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        const t_course=document.createElement('td')
        t_course.textContent=element.course
        t_row.appendChild(t_course)


        const t_date=document.createElement('td')
        t_date.textContent=element.date
        t_row.appendChild(t_date)



        const t_email=document.createElement('td')
        t_email.textContent=element.email
        t_row.appendChild(t_email)


 
 const edit_td=document.createElement('td')
 const edit_btn=document.createElement('button')
 edit_btn.textContent='edit'
 edit_btn.onclick=function(){
     edit_frm(element.name)
 }
 edit_td.appendChild(edit_btn)
 t_row.appendChild(edit_td)

 

 const del_td=document.createElement('td')
 const del_btn=document.createElement('button')
 del_btn.textContent='delete'
 del_btn.onclick=function(){
     delete_data(element.name)
 }
 del_td.appendChild(del_btn)
 t_row.appendChild(del_td)



 t_var.appendChild(t_row)


 
});
}

document.getElementById('submit_form').addEventListener('submit',function(event) {
event.preventDefault() //remove refresh

const id=parseInt(document.getElementById('id').value)
const name=document.getElementById('name').value
const age=parseInt(document.getElementById('age').value)
const  course=document.getElementById('course').value
const date=document.getElementById('date').value
const email=document.getElementById('email').value
d.push({id:id,name:name,age:age,course:course,date:date,email:email})

document.getElementById('id').value=''
document.getElementById('name').value=''
document.getElementById('age').value=''
document.getElementById('course').value=''
document.getElementById('date').value=''
document.getElementById('email').value=''


display()

})
let edit_name=''
function edit_frm(name){
console.log('editing',name);
document.getElementById('edit_form').style.display='block'
document.getElementById('submit_form').style.display='none'
const edit_data=d.find(user=>user.name==name)
document.getElementById('e_id').value=edit_data.id
document.getElementById('e_name').value=edit_data.name
document.getElementById('e_age').value=edit_data.age
document.getElementById('e_course').value=edit_data.course
document.getElementById('e_date').value=edit_data.date
document.getElementById('e_email').value=edit_data.email



}
document.getElementById('edit_form').addEventListener('submit',function(event){
event.preventDefault()
const e_id=document.getElementById('e_id').value
const e_name=document.getElementById('e_name').value
const e_age=document.getElementById('e_age').value
const e_course=document.getElementById('e_course').value
const e_date=document.getElementById('e_date').value
const e_email=document.getElementById('e_email').value
// console.log(e_name,e_age,e_place);
d=d.map(user=>{
 if(user.name==edit_name){
     return {...user,id:e_id,name:e_name,age:e_age,course:e_course,date:e_date,email:e_email}
 }
 return user
})
document.getElementById('edit_form').style.display='none'
document.getElementById('submit_form').style.display='block'
display()
})


function delete_data(name){
// console.log(name);
d=d.filter(user=>{
 if(user.name!=name){
     return user

 }
})
display()

}

display()

