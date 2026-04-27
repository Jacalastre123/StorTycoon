 document.addEventListener("click", event => {
            const spaceShow = document.getElementById("spaceShow")
            const speedShow = document.getElementById("speedShow")
            

            if (event.target.id === "startClose") {
                start.close()
            }
            if (event.target.id === "tryAgain") {
             
                
                window.location.reload()
            }
            if (event.target.id === "addSpeed" && money >= speedCost) {
                money -= speedCost
                speed += speedInc


               
                if (speed < 1000) {
                    speedShow.innerText = "Speed: " + speed + "B/s"
                }
                else if (speed < 1000 ** 2 ) {
                   speedShow.innerText = "Speed: " + (speed / 1000).toFixed(2) + "kB/s"
                }
                else if (speed < 1000 ** 3 ) {
                   speedShow.innerText = "Speed: " + (speed / 1000 ** 2).toFixed(2) + "MB/s"
                }

                else if (speed < 1000 ** 4 ) {
                   speedShow.innerText = "Speed: " + (speed / 1000 ** 3).toFixed(2) + "GB/s"
                }
                else {
                    speedShow.innerText = "Speed: " + (speed / 1000 ** 4).toFixed(2) + "TB/s"
                }

            }
            if (event.target.id === "addSpace" && money >= spaceCost) {
                space += spaceInc
                money -= spaceCost
          
                
                if (space < 1000) {
                    spaceShow.innerText = "Space: " + space + "B"
                }
                else if (space < 1000 ** 2 ) {
                   spaceShow.innerText = "Space: " + (space / 1000).toFixed(2) + "kB"
                }
                else if (space < 1000 ** 3 ) {
                   spaceShow.innerText = "Space: " + (space / 1000 ** 2).toFixed(2) + "MB"
                }

                else if (space < 1000 ** 4 ) {
                   spaceShow.innerText = "Space: " + (space / 1000 ** 3).toFixed(2) + "GB"
                }
                else {
                    spaceShow.innerText = "Space: " + (space / 1000 ** 4).toFixed(2) + "TB"
                }

            }


            if (event.target.id === "prestige" && money >= prestigeCost) {
              
                prestigeCount *= 2
                spaceInc += prestigeCount * 2
                
                speedInc += prestigeCount * 2
                speedCost += Math.floor(prestigeCount * 2.5)
                spaceCost += Math.floor(prestigeCount * 2.5)
                prestigeCost += prestigeCount * 4

                   event.target.innerText = "Add Prestige ($" + prestigeCost + ")"
                if (spaceInc < 1000) {
                   addSpace.innerText = `Add Space ($${spaceCost}) (+${spaceInc}B)`
                      addSpeed.innerText = `Add Speed ($${speedCost}) (+${speedInc}B)`
                    
                }   

                else if (spaceInc < 1000 ** 2 ) {
                    addSpace.innerText = `Add Space ($${spaceCost}) (+${(spaceInc / 1000).toFixed(2)}kB)`
                 addSpeed.innerText = `Add Speed ($${speedCost}) (+${(speedInc / 1000).toFixed(2)}kB)`
   
                }

                else if (spaceInc < 1000 ** 3 ) {
                    addSpace.innerText = `Add Space ($${spaceCost}) (+${(spaceInc / 1000 ** 2).toFixed(2)}MB)`
                     addSpeed.innerText = `Add Speed ($${speedCost}) (+${(speedInc / 1000 ** 2).toFixed(2)}MB)`
               
                }
                else if (spaceInc < 1000 ** 4) {
                    addSpace.innerText = `Add Space ($${spaceCost}) (+${(spaceInc / 1000 ** 3).toFixed(2)}GB)`
                     addSpeed.innerText = `Add Speed ($${speedCost}) (+${(speedInc / 1000 ** 3).toFixed(2)}GB)`
               
                }

                else {
                    addSpace.innerText = `Add Space ($${spaceCost}) (+${(spaceInc / 1000 ** 4).toFixed(2)}TB)`
                 addSpeed.innerText = `Add Speed ($${speedCost}) (+${(speedInc / 1000 ** 4).toFixed(2)}TB)`
                }
 
            }

          
let timeout = null
            if (event.target.className === "surround") {
                const smallCard = document.getElementById("smallCard")
                if (!isConnected) {
                
                smallCard.style.animation = "insertion 0.5s"
                addSpeed.disabled = true
                addSpace.disabled = true
                document.getElementById("prestige").disabled = true
                if (speed < 1000) {
                    speedID.innerText = "Speed: " + speed + "B/s"
                    storage.innerText = "Storage: " + totalStored + "B" + "/" + space + "B"
                }
                else if (speed < 1000 ** 2 ) {
                  
                speedID.innerText = "Speed: " + speed / 1000 + "kB/s"
                storage.innerText = "Storage: " + totalStored / 1000 + "kB" + "/" + space / 1000 + "kB"
                }

                else if (speed < 1000 ** 3 ) {
                  
                speedID.innerText = "Speed: " + speed / 1000 ** 2 + "MB/s"
                storage.innerText = "Storage: " + totalStored / 1000 ** 2 + "MB" + "/" + space / 1000 ** 2 + "MB"
                }
                else if (speed < 1000 ** 4) {
                   
                    speedID.innerText = "Speed: " + speed / 1000 ** 3 + "GB/s"
                    storage.innerText = "Storage: " + totalStored / 1000 ** 3 + "GB" + "/" + space/ 1000 ** 3 + "GB"
                }

                else {
                
             
                speedID.innerText = "Speed: " + speed / 1000 ** 4 + "TB/s"
                storage.innerText = "Storage: " + totalStored / 1000 ** 4 + "TB" + "/" + space / 1000 ** 4 + "TB"
                }

                if (space < 1000) {
              
                    storage.innerText = "Storage: " + totalStored + "B" + "/" + space + "B"
                }
                else if (space < 1000 ** 2 ) {
                  

                storage.innerText = "Storage: " + totalStored / 1000 + "kB" + "/" + space / 1000 + "kB"
                }

                else if (space < 1000 ** 3 ) {
                storage.innerText = "Storage: " + totalStored / 1000 ** 2 + "MB" + "/" + space / 1000 ** 2 + "MB"
                }
                else if (space < 1000 ** 4) {
                   

                    storage.innerText = "Storage: " + totalStored / 1000 ** 3 + "GB" + "/" + space/ 1000 ** 3 + "GB"
                }

                else {
                storage.innerText = "Storage: " + totalStored / 1000 ** 4 + "TB" + "/" + space / 1000 ** 4 + "TB"
                }
                smallCard.style.display = "block"
                if (timeout !== null) clearTimeout(timeout)
                timeout = setTimeout(function() {
                    smallCard.style.display = "none"
                }, 500)
                isConnected = true
            }
            else {
                isConnected = false
                  addSpeed.disabled = false
                addSpace.disabled = false
                   document.getElementById("prestige").disabled = false
                smallCard.style.animation = "insertion-rev 0.5s"
                if (timeout !== null) clearTimeout(timeout)
                smallCard.style.display = "block"
timeout = setTimeout(function() {
    
                    smallCard.style.display = "none"
                }, 600)
                
            }
            listed.innerText = "Inserted: " + isConnected
            timeout = null
         
            }
                if (money < 1000) {
                        moneyID.innerText = "$" + money 
                        
                    }
                    else if (money < 1000 ** 2) {
                        moneyID.innerText = "$" + money
                    }

                    else if (money < 1000 ** 3) {
                        moneyID.innerText = "$" + money / 1000 ** 2 + "M"
                    }

                    else if (money < 1000 ** 4) {
                        moneyID.innerText = money / 1000 ** 3 + "B"
                    }
                    else {
                        moneyID.innerText = money / 1000 ** 4 + "T"
                    }
        })
