<?php $DATA = json_decode(file_get_contents("../src/shared/assets/fixtures/abtasty.json"), true); ?>

<!DOCTYPE html>
<html lang="fr" class="">
    <head>
        <script>
            window.ABTasty = <?php echo json_encode($DATA); ?>;
        </script>
    </head>
    <body>
        DEMO
    </body>
</html>
