function CrawlDataOnePage() 
{
    var resultsArea = document.querySelector('.shopee-search-item-result__items')
    var listResults = resultsArea.querySelectorAll('.shopee-search-item-result__item')
    var listResultsLength = listResults.length
    for (let i = 1; i < listResultsLength; i++) 
    {
        try 
        {
            var aTag = listResults[i].querySelector('a')
            var divL1Tag = aTag.querySelector('div')
            var divL2Tag = divL1Tag.querySelector('div')
            var divFirstL3Tag = divL2Tag.querySelector('div')
            var divSecL3Tag = divFirstL3Tag.nextElementSibling
            var divNameL4Tag = divSecL3Tag.querySelector('div')
            var divPriceL4Tag = divNameL4Tag.nextElementSibling
            var divLocationL4Tag = divPriceL4Tag.nextElementSibling.nextElementSibling
    
            var productName = divNameL4Tag.querySelector('div').querySelector('div').innerHTML
            console.log("ProductName: "+productName)
            var divPriceL5List = divPriceL4Tag.querySelectorAll('div')
            var divPriceL4TagTYPE = divPriceL5List.length
            if (divPriceL4TagTYPE == 1) 
            {
                var divPriceL5TagTYPE = divPriceL5List[0].querySelectorAll('span').length
                if (divPriceL5TagTYPE == 3) 
                {
                    var firstPrice = divPriceL5List[0].querySelectorAll('span')[2].innerHTML
                    console.log("ProductPrice: "+firstPrice)
                }
                else
                {
                    var firstPrice = divPriceL5List[0].querySelectorAll('span')[2].innerHTML
                    var secPrice = divPriceL5List[0].querySelectorAll('span')[5].innerHTML
                    console.log("ProductPrice: "+firstPrice+" - "+secPrice)
                }
            }
            else
            {
                var oldPrice = divPriceL5List[0].textContent
                var newPrice = divPriceL5List[1].querySelectorAll('span')[2].textContent
                console.log("ProductPrice (Old): "+oldPrice)
                console.log("ProductPrice (New): "+newPrice)
            }
            console.log("ProductLocation: "+divLocationL4Tag.textContent)
        }
        catch(err) 
        {
            continue;
        }
    }
}

async function CrawlDataAllPage(n) 
{
    window.scrollTo(0,9999);
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    for (let i = 1; i <= n; i++)
    {
        CrawlDataOnePage() 
        console.log("---------Next page please ["+i+"]--------")
        document.querySelector('.shopee-mini-page-controller__next-btn').click()
        await sleep(3000)
    }
} 

CrawlDataAllPage(2)