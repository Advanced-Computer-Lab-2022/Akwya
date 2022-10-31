


const handleCurrency = async (e) => {


await exchangeRates().latest().symbols('USD').fetch();      

}