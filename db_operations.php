<?php
    
    $studID = $_POST["student-number"];
    $name = $_POST["name"];
    $course = $_POST["course"];
    $year = $_POST["year-lvl"];
    $event = $_POST["event"];

    
    $conn = new mysqli('localhost', 'root', 'dlanor', 'xciteDB');

    if ($conn->connect_error) {
        die("Connection Failed: " .$conn->connect_error);
    }
    else {
        $stmt = $conn->prepare("INSERT INTO Students (StudID, Name, Course, Year, Event)
            values(?, ?, ?, ?, ?)");
        $stmt->bind_param("issis", $studID, $name, $course, $year, $event);
        $stmt->execute();

        $stmt->close();
        $conn->close();
    }
?>
