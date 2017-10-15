<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  @include('layouts.extensions')
  <script>
  var script = document.createElement('script');
  var fbContainer = document.createElement('div');
  fbContainer.setAttribute("id", "app");
  script.src="{{asset("/js/Home.js")}}";
  var body = document.getElementsByTagName('body');
  body[0].appendChild(fbContainer);
  body[0].appendChild(script);
  </script>
</body>
</html>