export const CreateCashOutPayload = (selectedQualifiedLevel,
    selectedCategoryBankDetails, IdentityModel, todayDate, fileUrl, originalFileName, category,
    levelIndex, returnOnInvestment) => {

    let payload = {
        contributorId: selectedQualifiedLevel.contributorId,
        base64String: fileUrl,
        fileName: originalFileName,
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

      payload.categoryId = selectedQualifiedLevel.categoryId;
      payload.categoryBankName = selectedCategoryBankDetails.categoryBankName;
      payload.categoryAccountName = selectedCategoryBankDetails.categoryAccountName;
      payload.categoryAccountNumber = selectedCategoryBankDetails.categoryAccountNumber

      /* switch (category){
        case "CategoryN500":
        payload.categoryId = selectedQualifiedLevel.categoryId;
        payload.categoryBankName = selectedCategoryBankDetails.categoryBankName;
        payload.categoryAccountName = selectedCategoryBankDetails.categoryAccountName;
        payload.categoryAccountNumber = selectedCategoryBankDetails.categoryAccountNumber;
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
      } */

      return payload;
}