var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};
var studentsMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str.name)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var students = [
    {
        "name": "Pranav",
        "address": {
            "line1": "ABC Building, 100 MAIN ST",
            "line2": "PO BOX 1022, USA",
            "city": "SEATTLE",
            "pincode": "98104"
        }   
    },
    {
        "name": "Aditya",
        "address": {
            "line1": "MEGASYSTEMS INCg, SUITE 5A-1204",
            "line2": null,
            "city": "TUCSON",
            "pincode": "85705"
        }
    }
];
var printObj = "address";
var updateStudentObject = function(){
    for(var x in students){
        for(var y in students[x]){
            if(y == printObj){
                students[x]["fulladdress"]="";
                for(var z in students[x][y]){                    
                    if(students[x][y][z] !=null)
                        students[x]["fulladdress"]=students[x]["fulladdress"]+", "+students[x][y][z];                   
                }
                students[x]["fulladdress"] = students[x]["fulladdress"].substring(2,students[x]["fulladdress"].length);
            }
        }
    }
};

updateStudentObject();
console.log(students);
$('#the-basics .typeahead   ').bind('typeahead:select', function(ev, suggestion) {
  console.log('Selection: ');
  console.log(suggestion);
});
$('#the-basics .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  display:'name',
  source: studentsMatcher(students),
  templates:{
      suggestion: function(data) {
          return '<p><strong>' + data.name + '</strong> – ' + data.fulladdress + '</p>';
      }
  }
});