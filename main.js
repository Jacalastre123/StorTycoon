      start.showModal()
setTimeout(() => {
    turnOn.style.display = "none"
}, 1000)
function arrange() {
       testFiles.forEach(item => {
        const tempClone = temp.content.cloneNode(true)
        const fileName = tempClone.querySelector("#fileName")
        
                    if (item < 1000) {
                        fileName.innerText = item + "B"
                      
                    }
                    else if (item < 1000 ** 2) {
                        fileName.innerText = item / 1000 + "kB"
                    }

                    else if (item < 1000 ** 3) {
                        fileName.innerText = item / 1000 ** 2 + "MB"
                    }

                    else if (item < 1000 ** 4) {
                        fileName.innerText = item / 1000 ** 3 + "GB"
                    }
                    else {
                        fileName.innerText = item / 1000 ** 4 + "TB"
                    }

                    document.getElementById("testFiles").appendChild(tempClone)

                })
}

             
            
                        arrange()
                let el = null;
         let draggable = false
           let fileDivRect = null
                    let offY;
                    let offX;
                document.querySelectorAll(".fileDiv").forEach((item, index) => {
                       

                
                    
              
                     
                    item.addEventListener("mousedown", e => {
                        draggable = item

                        fileDivRect = item.getBoundingClientRect()
                        offY = e.clientY - fileDivRect.y
                        offX = e.clientX - fileDivRect.x
                       
                            
                        el = item.cloneNode(true)
                        el.style.position = "absolute"

                        desktop.appendChild(el)
                         
                    })

               
                })

                     document.addEventListener("mousemove", e => {
                       
                        if (draggable) {
                             fileDivRect = draggable.getBoundingClientRect()
                            el.style.top = e.clientY - draggable.offsetHeight + "px"
                            el.style.left = e.clientX - draggable.offsetWidth + "px"
                            
                        }
                        
                    })
                    let fileNameText;
                    document.addEventListener("mouseup", e => {
                        if (el !== null && allowDrag) {
                   
                    fileDivRect = el.getBoundingClientRect()
                    
                          
                        draggable = false
                         
                        if ((fileDivRect.x < driveRect.x + driveRect.width && fileDivRect.x + fileDivRect.width > driveRect.left && fileDivRect.y < driveRect.y + driveRect.height && fileDivRect.y + fileDivRect.height > driveRect.y) && el !== null && isConnected) {
                            console.log("Snap In")
                           
                              fileNameText = el.querySelector("#fileName").innerText
                           
                        if (totalStored + Number(fileNameText.replace("G", "000000000").replace("B", "").replace("k", "000").replace("T", "000000000000").replace("M", "000000")) <= space) {
                            progCopy.parentElement.parentElement.style.display = "block"
                             progCopy.style.animation = "slide " +  (Number(fileNameText.replace("G", "000000000").replace("B", "").replace("k", "000").replace("T", "000000000000").replace("M", "000000")) / speed).toFixed(2) + "s"
                             document.getElementById("time").innerText = "Time: " + (Number(fileNameText.replace("G", "000000000").replace("B", "").replace("k", "000").replace("T", "000000000000").replace("M", "000000")) / speed).toFixed(2) + "s"
                             allowDrag = false
                            setTimeout(() => {
                            allowDrag = true
                            driveFiles.prepend(el)
                            el.style.position = "static"
                          const delBut = document.createElement("button")
                          delBut.id = "Delete"
                          delBut.innerText = "Delete"
                          delBut.addEventListener("click", (event) => {
                     
                               
                                event.target.parentElement.remove()
                                totalStored -= Number(fileNameText.replace("G", "000000000").replace("B", "").replace("k", "000").replace("T", "000000000000").replace("M", "000000"))
                                storage.innerText = "Storage: " + totalStored + "/" + space

                          })
                            el.appendChild(delBut)
                          let fileNameNum = Number(fileNameText.replace("G", "000000000").replace("B", "").replace("k", "000").replace("T", "000000000000").replace("M", "000000"))
                          money += fileNameNum
                          moneyID.innerText = "$" + money
                        if (fileNameNum === 2000000000000) {
                            document.getElementById("win").showModal()
                        }
                        if (fileNameNum < 1000) {

                                totalStored += Number(fileNameText.slice(0, -1))
                      
                    }
                    else if (fileNameNum < 1000 ** 2) {
                        totalStored += Number(fileNameText.replace("kB", "")) * 1000

                    }

                    else if (fileNameNum < 1000 ** 3) {
                         totalStored += Number(fileNameText.replace("MB", "")) * 1000 ** 2 

                    }

                    else if (fileNameNum < 1000 ** 4) {
                        totalStored += Number(fileNameText.replace("GB", "")) * 1000 ** 3 
                    }
                    else {
                        totalStored += Number(fileNameText.replace("TB", "")) * 1000 ** 4
                  
                    }
         
                    if (totalStored < 1000) {


                                 storage.innerText = "Storage: " + totalStored + "B" + "/" + space + "B"
                      
                    }
                    else if (totalStored + fileNameNum < 1000 ** 2) {

                        storage.innerText = "Storage: " + (totalStored / 1000).toFixed(2) + "kB" + "/" + (space / 1000).toFixed(2) + "kB"
                    }

                    else if (totalStored + fileNameNum < 1000 ** 3) {

                        storage.innerText = "Storage: " + (totalStored / 1000 ** 2).toFixed(2) + "MB" + "/" + (space / 1000 ** 2).toFixed(2) + "MB"
                    }

                    else if (totalStored + fileNameNum < 1000 ** 4) {

                        storage.innerText = "Storage: " + (totalStored / 1000 ** 3).toFixed(2) + "GB" + "/" + (space/ 1000 ** 3).toFixed(2) + "GB"
                    }
                    else {

                        storage.innerText = "Storage: " + (totalStored / 1000 ** 4).toFixed(2) + "TB" + "/" + (space / 1000 ** 4).toFixed(2) + "TB"
                    }
                  el = null
                  progCopy.parentElement.parentElement.style.display = "none"
                }, (Number(fileNameText.replace("G", "000000000").replace("B", "").replace("k", "000").replace("T", "000000000000").replace("M", "000000")) / speed).toFixed(2) * 1000)
                }
                else {
                    el.remove()
                    el = null
                }
            }
            else {
                    el.remove()
                    el = null
                }

               
                  

            }
             
                
                    })



                
