const mobileForm = document.querySelector(".mobileForm")
const nameInput = document.querySelector(".mobileForm .nameInput")
const priceInput = document.querySelector(".mobileForm .priceInput")
const tbody = document.querySelector("tbody")
const formbutton = document.querySelector(".mobileForm button")


const mobiles = JSON.parse( localStorage.getItem("mobiles")) || []
function createMobile() {
    const mobile = {
        name: nameInput.value,
        price: priceInput.value
    }
    if (nameInput.value.length > 0 && priceInput.value.length) {

        if(formbutton.textContent=="Create"){

            mobiles.push(mobile)

            localStorage.setItem ("mobiles",JSON.stringify(mobiles))
        }
     else {

        mobiles.splice(upDateIndex, 1, mobile)
        localStorage.setItem("mobiles",JSON.stringify(mobiles))
        formbutton.textContent = "Create"
     }

    display()
    clearMobile()

    }
}

function display() {
    tbody.innerHTML = "" 
    mobiles.forEach((mobile, index) => {
        tbody.innerHTML += ` <tr>
                        <td>${index + 1}</td>
                        <td>${mobile.name}</td>
                        <td>${mobile.price}</td>
                        <td>
                            <svg
                            onclick="getData(${index})"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2">
                                    <path
                                        d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
                                    <path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
                                </g>
                            </svg>
                            <svg 
                            onclick="deleteMobile(${index})"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1M6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
                            </svg>

                        </td>

                    </tr>`
    })

}

display()

function clearMobile() {
    nameInput.value = ""
    priceInput.value = ""
}

function deleteMobile(mobileIndex) {
    mobiles.splice(mobileIndex, 1)
    // localStorage.setItem("mobiles",JSON.stringify(mobiles))
    display()
}


let upDateIndex = null

function getData(mobileIndex) {
    const mobile = mobiles[mobileIndex]
    nameInput.value = mobile.name
    priceInput.value = mobile.price

    formbutton.textContent = "Update"
    upDateIndex = mobileIndex


}




mobileForm.addEventListener("submit", (e) => {

    e.preventDefault()
    createMobile()



})