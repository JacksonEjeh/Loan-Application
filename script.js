function btn(){
    window.location.href="LoanPage.html"
}

let fullName = document.getElementById('fullName').value

document.getElementById('loanPage').addEventListener('submit', function(event){
    event.preventDefault()



    document.getElementById('title').classList.remove('error')
    document.getElementById('titleError').style.display = 'none'
    document.getElementById('fullName').classList.remove('error')
    document.getElementById('fullNameError').style.display = 'none'
    document.getElementById('fullNameError2').style.display = 'none'
    document.getElementById('annualIncome').classList.remove('error')
    document.getElementById('annualIncomeError').style.display = 'none'
    document.getElementById('annualIncomeError2').style.display = 'none'
    document.getElementById('annualIncomeError3').style.display = 'none'
    document.getElementById('accountBalance').classList.remove('error')
    document.getElementById('accountBalanceError').style.display = 'none'
    document.getElementById('accountBalanceError2').style.display = 'none'
    document.getElementById('requestedLoan').classList.remove('error')
    document.getElementById('requestedLoanError').style.display = 'none'
    document.getElementById('requestedLoanError2').style.display = 'none'
    document.getElementById('sixMonth').classList.remove('error')
    document.getElementById('sixMonthError').style.display = 'none'
    document.getElementById('depositedDate').classList.remove('error')
    document.getElementById('depositedDateError').style.display = 'none'
    document.getElementById('lastCollectionDate').classList.remove('error')
    document.getElementById('lastCollectionDateError').style.display = 'none'
    document.getElementById('takingLoan').classList.remove('error')
    document.getElementById('takingLoanError').style.display = 'none'
    document.getElementById('repayLoan').classList.remove('error')
    document.getElementById('repayLoanError').style.display = 'none'
    document.getElementById('accountType').classList.remove('error')
    document.getElementById('accountTypeError').style.display = 'none'

    valid = true
    let todayDate = new Date()
    

    let UserName = {
        fullName : document.getElementById('fullName').value,
        title : document.getElementById('title').value,
        requestedLoan : document.getElementById('requestedLoan').value
    }
    let accountBalance = document.getElementById('accountBalance').value
    let requestedLoan = document.getElementById('requestedLoan').value
    let sixMonth = document.getElementById('sixMonth').value
    let depositedDate = new Date(document.getElementById('depositedDate').value)
    let lastCollectionDate = new Date(document.getElementById('lastCollectionDate').value)
    let takingLoan = new Date(document.getElementById('takingLoan').value)
    let repayLoan = new Date(document.getElementById('repayLoan').value)
    let accountType = document.getElementById('accountType').value
    let annualIncome = document.getElementById('annualIncome').value

    let accountBalanceNum = parseInt(accountBalance)
    let requestedLoanNum = parseInt(UserName.requestedLoan)
    let annualIncomeNum = parseInt(annualIncome)

    let creditScore = 0;

console

    if (UserName.title === "") {
        document.getElementById('title').classList.add('error')
        document.getElementById('titleError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (UserName.fullName === ""){
        document.getElementById('fullName').classList.add('error')
        document.getElementById('fullNameError').style.display = 'block'
        error = true
        return false
    } else if(!isNaN(UserName.fullName)){
        document.getElementById('fullName').classList.add('error')
        document.getElementById('fullNameError2').style.display = 'block'
        error = true
        return false
    }else{
        error = false
        let fullNameJson = JSON.stringify(UserName)
        localStorage.setItem('UserName', fullNameJson)
    }
    if (annualIncome === "") {
        valid = false
        document.getElementById('annualIncome').classList.add('error')
        document.getElementById('annualIncomeError').style.display = 'block'
        error = true
        return false
    } else if (isNaN(annualIncome)) {
        valid = false
        document.getElementById('annualIncome').classList.add('error')
        document.getElementById('annualIncomeError2').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (accountBalance === "") {
        valid = false
        document.getElementById('accountBalance').classList.add('error')
        document.getElementById('accountBalanceError').style.display = 'block'
        error = true
        return false
    }else if (isNaN(accountBalance)) {
        valid = false
        document.getElementById('accountBalance').classList.add('error')
        document.getElementById('accountBalanceError2').style.display = 'block'
        error = true
        return false
    }else{
        error = false
    } 
    if (UserName.requestedLoan === "") {
        valid = false
        document.getElementById('requestedLoan').classList.add('error')
        document.getElementById('requestedLoanError').style.display = 'block'
        error = true
        return false
    } else if (isNaN(UserName.requestedLoan)) {
        valid = false
        document.getElementById('requestedLoan').classList.add('error')
        document.getElementById('requestedLoanError2').style.display = 'block'
        error = true
        return false
    } else {
        error = false
    }
    if (sixMonth === "") {
        valid = false
        document.getElementById('sixMonth').classList.add('error')
        document.getElementById('sixMonthError').style.display = 'block'
        error = true
        return false
    } else {
        error = false
    }
    if (depositedDate === "") {
        // valid = false
        document.getElementById('depositedDate').classList.add('error')
        document.getElementById('depositedDateError').style.display = 'block'
        error = true
        return false
    } else{
        error = false
    }
    if (accountType === "") {
        // valid = false
        document.getElementById('accountType').classList.add('error')
        document.getElementById('accountTypeError').style.display = 'block'
        error = true
        return false
    }else{
        error = false
    }
    
    
    let total = annualIncomeNum
    let percentage = 45
    let result = (percentage / 100) * total
    console.log("this is the 45% of what i inputed in the annual input ", result)
    
    if(requestedLoan > result){
        document.getElementById('requestedLoan').classList.add('error')
        document.getElementById('annualIncomeError3').style.display = 'block'
        error = true
        return false
    }else{
        error = false
    }


    if (accountBalanceNum > requestedLoanNum) {
        creditScore += 10
    } else if (accountBalanceNum < requestedLoanNum) {
        creditScore -= 10
    }  

    if (sixMonth === "yes") {
        creditScore += 10
    } else if(sixMonth === "no"){
        console.log("no point added");
    }

    
    let oneMonthAgo = new Date()
    
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    if (depositedDate >= oneMonthAgo && depositedDate <= todayDate) {
        creditScore += 5
    }

    let sixMonthAgo = new Date()
    sixMonthAgo.setMonth(sixMonthAgo.getMonth() - 6)
    if (lastCollectionDate <= sixMonthAgo && lastCollectionDate <= todayDate) {
        creditScore += 10
    }
    
    let withinSixMonth = new Date()
    withinSixMonth.setMonth(withinSixMonth.getMonth() + 6)
    if (repayLoan <= withinSixMonth && repayLoan >= todayDate) {
        creditScore += 5
    }


    if (accountType === "savings") {
        creditScore += 5
    }else if (accountType === "current") {
        creditScore += 10
    }


    if (creditScore <= 30) {
        window.location.href = "rejection.html"
        let display = document.getElementById('display')
        let messege1 = "Your total Credit Score = "
        display.innerHTML = messege1 + creditScore
    }else{
        window.location.href = "approval.html"
    }

    

});