var vushAlfabet=[
    {
        'id': 'а',
        'imgSrc': 'img/a.gif'
    },
    {
        'id': 'б',
        'imgSrc': 'img/b.gif'
    },
    {
        'id': 'в',
        'imgSrc': 'img/b2.gif'
    },
    {
        'id': 'г',
        'imgSrc': 'img/g.gif'
     },
    {
        'id': 'ґ',
        'imgSrc': 'img/g2.gif'
    },
    {
        'id': 'д',
        'imgSrc': 'img/d.gif'
    },
    {
        'id': 'ж',
        'imgSrc': 'img/j.gif'
    },
    {
        'id': 'е',
        'imgSrc': 'img/e.gif'
    },
    {
        'id': 'є',
        'imgSrc': 'img/e1.gif'
    },
    {
        'id': 'з',
        'imgSrc': 'img/z.gif'
    },
    {
        'id': 'и',
        'imgSrc': 'img/i1.gif'
    },
    {
        'id': 'і',
        'imgSrc': 'img/i2.gif'
    },
    {
        'id': 'ї',
        'imgSrc': 'img/i.gif'
    },
    {
        'id': 'й',
        'imgSrc': 'img/y3.gif'
    },
    {
        'id': 'к',
        'imgSrc': 'img/k.gif'
    },
    {
        'id': 'л',
        'imgSrc': 'img/l.gif'
    },
    {
        'id': 'м',
        'imgSrc': 'img/m.gif'
    },
    {
        'id': 'н',
        'imgSrc': 'img/n.gif'
    },
    {
        'id': 'о',
        'imgSrc': 'img/o.gif'
    },
    {
        'id': 'п',
        'imgSrc': 'img/p1.gif'
    },
    {
        'id': 'р',
        'imgSrc': 'img/p.gif'
    },
    {
        'id': 'с',
        'imgSrc': 'img/s.gif'
    },
    {
        'id': 'т',
        'imgSrc': 'img/t.gif'
    },
    {
        'id': 'у',
        'imgSrc': 'img/y.gif'
    },
    {
        'id': 'ф',
        'imgSrc': 'img/f.gif'
    },
    {
        'id': 'х',
        'imgSrc': 'img/x.gif'
    },
    {
        'id': 'ц',
        'imgSrc': 'img/cc.gif'
    },
    {
        'id': 'ч',
        'imgSrc': 'img/ch.gif'
    },
    {
        'id': 'ш',
        'imgSrc': 'img/sh.gif'
    },
    {
        'id': 'щ',
        'imgSrc': 'img/shch.gif'
    },
    {
        'id': 'ь',
        'imgSrc': 'img/b2.gif'
    },
    {
        'id': 'ю',
        'imgSrc': 'img/yu.gif'
    },
    {
        'id': 'я',
        'imgSrc': 'img/ya.gif'
    }
];


var yourName = document.getElementById('name');
var yourNameValue='';
var yourVushLetter='';
yourName.addEventListener('keyup', getVushAlfab);

function getVushAlfab(){
    yourNameValue = this.value.toLowerCase().split('');
    var yourVushName='';

    console.log(yourNameValue);

     for( var i=0; i<yourNameValue.length; i++){

         for(var key in vushAlfabet){
                if( yourNameValue[i] == vushAlfabet[key].id ){

                    console.log(vushAlfabet[key].id);
                    yourVushLetter = '<img src="'+vushAlfabet[key].imgSrc+'" alt="'+ vushAlfabet[key].id+'">';
                    yourVushName +=yourVushLetter;

                    console.log(yourVushLetter);
                }
            }
        }

        document.getElementById('out').innerHTML = yourVushName;

}



document.querySelector('.ENlang').onclick = translateToEN;
document.querySelector('.UAlang').onclick = translateToUA;
function translateToEN() {
    document.querySelector('.poet').innerHTML = ' Put on embroidery' + '<br>' + 'Let the world see the Ukrainian -' + '<br>' +
        'Young, brave, stalwart, a union for a hundred thousand years';
    document.querySelector('h1').innerHTML = 'Choose your shirt';
    document.querySelector('.enter-your-name').innerHTML = 'Enter your name' + '<br>' +'(ukrainian)'
}
function translateToUA() {
    document.querySelector('.poet').innerHTML = 'Одягнімо вишиванки, друже,' + '<br>' +
        'Хай побачить українців світ —' + '<br>' +
        'Молодих, відважних, дужих,' +'<br>' + ' У єднанні на сто тисяч літ.';

    document.querySelector('h1').innerHTML = 'Обери свою вишиванку';
    document.querySelector('.enter-your-name').innerHTML = 'Введіть своє ім\'я ' + '<br>' +'(українською)'
}