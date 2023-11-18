//how to get dat from frontend using async await statgy 

document.getElementById('contactForm').addEventListener('submit',async (e) => {
  e.preventDefault()

  const name=document.getElementById('name').value
  const email=document.getElementById('email').value
  const message=document.getElementById('message').value

  try{
    const n=async () =>{
      console.log("ALL WORK IS DONE")
    }
    console.log("working")
    document.getElementById('response').innerHTML="Thanks For Information"
    let info= JSON.stringify({ name, email, message })
    console.log(info)
    console.log("done")
   const main1=async ()=>{
     let p=await n()
   }
    main1()
  }
  catch(err){
    console.log(err)
  }
})
