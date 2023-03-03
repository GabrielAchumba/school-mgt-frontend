export const CreateCashOutPayload = (selectedQualifiedLevel,
    selectedCategoryBankDetails, IdentityModel, todayDate, CashOut, category,
    levelIndex, returnOnInvestment) => {

    let payload = {
        contributorId: selectedQualifiedLevel.contributorId,
        base64String: CashOut.base64String,
        fileName: CashOut.fileName,
        createdYear: todayDate.getFullYear(),
        createdMonth: todayDate.getMonth() + 1,
        createdDay: todayDate.getDate(),
        createdBy: IdentityModel.id,
        fullName: selectedQualifiedLevel.fullName,
        bankName: selectedQualifiedLevel.bankName,
        accountName: selectedQualifiedLevel.accountName,
        accountNumber: selectedQualifiedLevel.accountNumber,
        category: category,
        level: levelIndex,
        returnOnInvestment,
      }

      switch (category){
        case "CategoryN500":
        payload.categoryN500Id = selectedQualifiedLevel.categoryN500Id;
        payload.categoryN500BankName = selectedCategoryBankDetails.categoryBankName;
        payload.categoryN500AccountName = selectedCategoryBankDetails.categoryAccountName;
        payload.categoryN500AccountNumber = selectedCategoryBankDetails.categoryAccountNumber;
        break;
        case "CategoryN1000":
        payload.categoryN1000Id = selectedQualifiedLevel.categoryN1000Id;
        payload.categoryN1000BankName = selectedCategoryBankDetails.categoryBankName;
        payload.categoryN1000AccountName = selectedCategoryBankDetails.categoryAccountName;
        payload.categoryN1000AccountNumber = selectedCategoryBankDetails.categoryAccountNumber;
        break;
        case "CategoryN2000":
        payload.categoryN2000Id = selectedQualifiedLevel.categoryN2000Id;
        payload.categoryN2000BankName = selectedCategoryBankDetails.categoryBankName;
        payload.categoryN2000AccountName = selectedCategoryBankDetails.categoryAccountName;
        payload.categoryN2000AccountNumber = selectedCategoryBankDetails.categoryAccountNumber;
        break;
        case "CategoryN5000":
        payload.categoryN5000Id = selectedQualifiedLevel.categoryN5000Id;
        payload.categoryN5000BankName = selectedCategoryBankDetails.categoryBankName;
        payload.categoryN5000AccountName = selectedCategoryBankDetails.categoryAccountName;
        payload.categoryN5000AccountNumber = selectedCategoryBankDetails.categoryAccountNumber;
        break;
        case "CategoryN10000":
        payload.categoryN10000Id = selectedQualifiedLevel.categoryN10000Id;
        payload.categoryN10000BankName = selectedCategoryBankDetails.categoryBankName;
        payload.categoryN10000AccountName = selectedCategoryBankDetails.categoryAccountName;
        payload.categoryN10000AccountNumber = selectedCategoryBankDetails.categoryAccountNumber;
        break;
      }

      return payload;
}