var vushAlfabet=[
    {
        'id': 'A',
        'imgSrc': 'a'
    },
    {
        'id': 'B',
        'imgSrc': 'b'
    },
    {
        'id': 'C',
        'imgSrc': 'c'
    },
    {
        'id': 'D',
        'imgSrc': 'd'
     }
];


var yourName = document.getElementById('name');
var yourNameValue='';
var yourVushLetter='';
yourName.addEventListener('keyup', getVushAlfab);

function getVushAlfab(){
    yourNameValue = this.value.split('');
    var yourVushName='';

    console.log(yourNameValue);
    for(var key in vushAlfabet){

            for( var i=0; i<yourNameValue.length; i++){
                if( yourNameValue[i] == vushAlfabet[key].id ){

                    console.log(vushAlfabet[key].id);
                    yourVushLetter = vushAlfabet[key].imgSrc;
                    yourVushName +=yourVushLetter;

                    console.log(yourVushLetter);
                }
            }
        }

        document.getElementById('out').innerHTML = yourVushName;

}