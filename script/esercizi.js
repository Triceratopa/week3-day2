 
 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
       /*const h1 =document.getElementsByTagName('h1')[0]
       const changeTitle = function () {
        
        h1.innerText='Reattiva questa pagina'
        
       
       }
       changeTitle()
       console.log(h1.innerText)*/
       

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
      /* const addClassToTitle = function () {
 h1.classList.add('myHeading')
       }
       addClassToTitle()
       console.log(h1)
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 const allPOnDiv=document.querySelectorAll('div p')
       const changePcontent = function () {
        for(let i=0;i<allPOnDiv.length;i++){
          allPOnDiv[i].innerText='Avrei solo voglia di giocare a League of Legends'
          
        }
       }
       changePcontent()
       console.log(allPOnDiv)
 
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 const newA=document.querySelector('a')
 
       const changeUrls = function () {
        for(let i=0;i<newA.length;i++){
        newA[0].setAttribute('href', 'https://www.google.com' )
       }
      
      }
      changeUrls()
    
    
    console.log(newA)

       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 const secondLis=document.getElementById('secondList')
       const addToTheSecond = function () {
        const newListItem=document.createElement('li')
        newListItem.innerText='4th'
        secondLis.appendChild(newListItem)
       }
 addToTheSecond()
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

        const newP=document.createElement('p')
       const addParagraph = function () {
        
        newP.innerText='Faker è il miglior player di LOL'
        const firstDiv=document.getElementsByTagName('div')[0]
        firstDiv.appendChild(newP)
       }
       addParagraph()
 console.log(newP)
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 /*const firstLis=document.getElementsByTagName('li')
       const hideFirstUl = function () {
        const exList=document.getElementById('first List')
        exList.removeChild(firstLis)
      
       }
       hideFirstUl()
       console.log(firstLis)*/
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 const x=document.querySelectorAll('ul li')
       const paintItGreen = function () {
        for(let i=0;i<x.length;i++){
          x[i].style.backgroundColor='green'
        }
       }
       paintItGreen()
       console.log(x)
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
        const h1 =document.getElementsByTagName('h1')[0]
       const makeItClickable = function () {
        
        h1.addEventListener('click', function(){
          const text=h1.innerText
          h1.innerText=text.slice(0,-1)
        })
       }
 makeItClickable()
 console.log(h1.innerText)
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {}
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 const table=document.createElement('table')
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 const h2=document.getElementById('changeMyColor')
       const changeColorWithRandom = function () {
        h2.addEventListener('click', function(){
          let randomColor=(Math.random()*360)
          h2.style.color=randomColor
        })
       }
       changeColorWithRandom()