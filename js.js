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
        'imgSrc': 'img/c.gif'
     },
    {
        'id': 'ґ',
        'imgSrc': 'img/e.gif'
    },
];


var yourName = document.getElementById('name');
var yourNameValue='';
var yourVushLetter='';
yourName.addEventListener('keyup', getVushAlfab);

function getVushAlfab(){
    yourNameValue = this.value.toLowerCase().split('');
    var yourVushName='';

    console.log(yourNameValue);
    for(var key in vushAlfabet){

            for( var i=0; i<yourNameValue.length; i++){
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