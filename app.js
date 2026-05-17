let cartList=[
  {id:1,name:'新鲜红富士苹果 5斤装',price:29.9,spec:'5斤装',num:1,icon:'🍎',selected:true},
  {id:3,name:'iPhone 15 Pro Max 256G',price:8999,spec:'原色钛金属 256G',num:1,icon:'📱',selected:false}
];
function showToast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2000)}
function toggleCartCheck(el){const c=el.querySelector('.item-check');c.classList.toggle('checked')}
function changeNum(el,delta){const v=el.parentElement.querySelector('.num-value');let n=parseInt(v.textContent)+delta;n=Math.max(1,n);v.textContent=n}
function toggleEdit(){const b=document.querySelector('.cart-edit');b.textContent=b.textContent==='编辑'?'完成':'编辑'}
function selectCategory(el,name){document.querySelectorAll('.category-tab').forEach(t=>t.classList.remove('active'));el.classList.add('active');document.querySelector('.sub-title').textContent=name}
function agreePrivacy(){document.getElementById('privacyModal').style.display='none';localStorage.setItem('privacy_agreed',true)}
if(localStorage.getItem('privacy_agreed')){const m=document.getElementById('privacyModal');if(m)m.style.display='none'}