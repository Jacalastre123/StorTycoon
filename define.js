   let speed = 1
        let space = 1
        let speedInc = 1
        let spaceInc = 1
        let speedCost = 1
        let spaceCost = 1
        let money = 5
        let prestigeCount = 1
        let totalStored = 0
        let isConnected = false
        let allowDrag = true
        let prestigeCost = 100
        
        const addSpeed = document.getElementById("addSpeed")
        const addSpace = document.getElementById("addSpace")
        const card = document.getElementById("card")
        const turnOn = document.getElementById("turnOn")
        const desktop = document.getElementById("desktop")
        const cardSlot = document.getElementById("cardSlot")
        const temp = document.getElementById("template")
        const driveFiles = document.getElementById("driveFiles")
        const driveRect = driveFiles.getBoundingClientRect()
        const listed = document.getElementById("listed")
        const storage = document.getElementById("storage")
        const speedID = document.getElementById("speed")
        const time = document.getElementById("time")
        const  progCopy = document.querySelector(".progress-noanim")
        const moneyID = document.getElementById("money")   
        const start = document.getElementById("start")
        
        let testFiles = [
            1, 5, 10, 20, 40, 100, 250, 500, 1000, 2000, 4000, 6000, 8000, 10000, 15000, 20000, 40000, 50000, 70000, 100000, 200000, 400000, 800000, 1000000, 3000000, 5000000, 8000000,10000000, 12000000, 15000000, 20000000, 40000000, 60000000, 80000000, 100000000, 200000000, 500000000, 900000000, 1000000000, 2000000000, 3000000000, 5000000000, 10000000000, 20000000000, 30000000000, 50000000000, 60000000000, 80000000000,160000000000, 200000000000, 300000000000, 500000000000, 800000000000, 1000000000000, 1500000000000, 2000000000000
                ]