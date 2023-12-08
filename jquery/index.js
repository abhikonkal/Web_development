
$("h1").before("<button>New before </button>")
$("h1").after("<button>New after </button>")
$("h1").prepend("<button>prepend </button>")
$("h1").append("<button>Append</button>")

$("h1").css("color","red");

$("button").click(function(){
    $("h1").css("color","purple");
})

