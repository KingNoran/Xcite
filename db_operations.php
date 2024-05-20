<?php
    var_dump($_POST);
    
    $studID = $_POST["student-number"];
    $name = $_POST["name"];
    $course = $_POST["course"];
    $year = $_POST["year-lvl"];


    $conn = new mysqli('localhost', 'root', 'dlanor', 'xciteDB');

    if ($conn->connect_error) {
        die("Connection Failed: " .$conn->connect_error);
    }
    else {
        $stmt = $conn->prepare("INSERT INTO Students (StudID, Name, Course, Year)
            values(?, ?, ?, ?)");
        $stmt->bind_param("issi", $studID, $name, $course, $year);
        $stmt->execute();

        echo "Registration Successfully!";

        $stmt->close();
        $conn->close();
    }
?>
