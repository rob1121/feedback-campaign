<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Feedback</title>
    </head>
    <body>
    <div id="app"></div>
    <script>
        window.user = {!!Auth::user()!!};
    </script>
    <script src="{{asset('js/main.js')}}"></script>
    </body>
</html>