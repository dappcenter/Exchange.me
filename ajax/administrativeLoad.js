// Unapproved use and redistribution of this code and respective product is strictly prohibited.
// Copyright© 2018 Keanu Ashwell all rights are reserved to the author, creator, registered 
// and licensed owners of this product and it's content

// Check the document is ready
$(document).ready(function() {

    // Check for click
    $("#administrative-block").on("click", function() {

        // Check if the user is blocked or not
        if($("#administrative-block").text() == "Block") {

            // AJAX
            $(document).load("ajax/inc/users.inc.block.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Blocked: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-block").text("Unblock");


                        break;
                        case "blocked":

                        // Change the attributes
                        $("#administrative-block").text("Unblock");

                        break;
                    }

                }

            );

        } else {

            // AJAX
            $(document).load("ajax/inc/users.inc.unblock.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Blocked: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-block").text("Block");

                        break;
                        case "unblocked":

                        // Change the attributes
                        $("#administrative-block").text("Block");

                        break;
                    }

                }

            );

        }

    });

    // Check for click
    $("#administrative-friend").on("click", function() {

        // Check if the user is blocked or not
        if($("#administrative-friend").text() == "Add Friend") {

            // AJAX
            $(document).load("ajax/inc/users.inc.add.friend.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Friend: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-friend").text("Remove Friend");
                        $("#administrative-friend").css("color", "#000");

                        break;
                        case "friends":

                        // Change the attributes
                        $("#administrative-friend").text("Remove Friend");
                        $("#administrative-friend").css("color", "#000");

                        break;
                    }

                }

            );

        } else {

            // AJAX
            $(document).load("ajax/inc/users.inc.remove.friend.php", 
            {
            Username: $("#grid-content__loggedin").data("user"),
            Friend: $("#info-username").children("p").text()
            },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Response text check
                    switch(responseTxt) {
                        case "true":

                        // Change the attributes
                        $("#administrative-friend").text("Add Friend");
                        $("#administrative-friend").css("color", "#40cf2d");

                        break;
                        case "removed":

                        // Change the attributes
                        $("#administrative-friend").text("Add Friend");
                        $("#administrative-friend").css("color", "#40cf2d");

                        break;
                    }

                }

            );

        }

    });

    // Check for click
    $("#administrative-report").on("click", function() {

        // Check if window exists
        /*
        !($"#user-warning-window") doesn't work here
        .length must be appended
        */
        if(!$("#user-warning-window").length) {

            // Declare and define variables
            var offsetPosition = [0, 0];
            var mousePos, mouseDown;

            // Create the element
            let HTMLDivElement_Warning_Window = document.createElement("div");

            // Set element attributes
            /*
            .attr() doesn't append attribute
            TypeError!
            */
            HTMLDivElement_Warning_Window.setAttribute("id", "user-warning-window");

            // Style the element
            HTMLDivElement_Warning_Window.style.display = "grid";
            HTMLDivElement_Warning_Window.style.position = "absolute";
            HTMLDivElement_Warning_Window.style.gridTemplateColumns = "1fr";
            HTMLDivElement_Warning_Window.style.gridTemplateRows = "20px 1fr 30px";
            HTMLDivElement_Warning_Window.style.gridColumnStart = 1;
            HTMLDivElement_Warning_Window.style.gridColumnEmd = 3;
            HTMLDivElement_Warning_Window.style.justifySelf = "center";
            HTMLDivElement_Warning_Window.style.width = "50%";
            HTMLDivElement_Warning_Window.style.height = "325px";
            HTMLDivElement_Warning_Window.style.backgroundColor = "#333333";
            HTMLDivElement_Warning_Window.style.borderLeft = "2px solid #00e01e";
            HTMLDivElement_Warning_Window.style.borderBottom = "2px solid #00e01e";
            HTMLDivElement_Warning_Window.style.borderRight = "2px solid #00e01e";

            // Append the child
            $("#content-profile").append(HTMLDivElement_Warning_Window);

            // Create the element
            let HTMLDivElement_Warning_Window_Titlebar = document.createElement("div");

            // Set element attributes
            HTMLDivElement_Warning_Window_Titlebar.setAttribute("id", "warning-window-titlebar");

            // Style the element
            HTMLDivElement_Warning_Window_Titlebar.style.display = "grid";
            HTMLDivElement_Warning_Window_Titlebar.style.gridColumn = "auto";
            HTMLDivElement_Warning_Window_Titlebar.style.gridRow = 1;
            HTMLDivElement_Warning_Window_Titlebar.style.gridTemplateColumns = "1fr 20px";
            HTMLDivElement_Warning_Window_Titlebar.style.gridTemplateRows = "1fr";
            HTMLDivElement_Warning_Window_Titlebar.style.backgroundColor = "#00e01e";

            // Append the child
            $("#user-warning-window").append(HTMLDivElement_Warning_Window_Titlebar);

            // Add event listner
            $("#warning-window-titlebar").on("mousedown", function(event) {

                mouseDown = true;

                offsetPosition = [$("#user-warning-window").offset().left - event.clientX, $("#user-warning-window").offset().top - event.clientY];

            });

            // Add event listner
            $("#warning-window-titlebar").on("mouseup", function() {

                mouseDown = false;

            });

            // Add event listner
            $("#warning-window-titlebar").on("mousemove", function(event) {

                event.preventDefault();

                if(mouseDown) {

                    mousePos = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    $("#user-warning-window").css("left", mousePos.x + offsetPosition[0] + "px");
                    $("#user-warning-window").css("top", mousePos.y + offsetPosition[1] + "px");

                }

            });

            // Add event listner
            $("#warning-window-titlebar").on("focusout", function() {

                mouseDown = false;

            });

            // Create the element
            let HTMLParagraphElement_Warning_Window_Title = document.createElement("p");

            // Set the text context
            /*
            .text() doesn't work here
            TypeError!
            */
            HTMLParagraphElement_Warning_Window_Title.textContent = "Report User";

            // Style the element
            HTMLParagraphElement_Warning_Window_Title.style.gridColumn = 1;
            HTMLParagraphElement_Warning_Window_Title.style.gridRow = "auto";
            HTMLParagraphElement_Warning_Window_Title.style.justifySelf = "start";
            HTMLParagraphElement_Warning_Window_Title.style.alignSelf = "center";
            HTMLParagraphElement_Warning_Window_Title.style.color = "green";
            HTMLParagraphElement_Warning_Window_Title.style.fontFamily = "Lato, sans-serif";
            HTMLParagraphElement_Warning_Window_Title.style.fontSize = "0.8em";
            HTMLParagraphElement_Warning_Window_Title.style.padding = "0px 0px 0px 5px";
            HTMLParagraphElement_Warning_Window_Title.style.cursor = "default";

            // Append the child
            $("#warning-window-titlebar").append(HTMLParagraphElement_Warning_Window_Title);

            // Create the element
            let HTMLDivElement_Warning_Window_Exit = document.createElement("div");

            // Set the attributes
            HTMLDivElement_Warning_Window_Exit.setAttribute("id", "titlebar-exit-container");

            // Style the element
            HTMLDivElement_Warning_Window_Exit.style.display = "grid";
            HTMLDivElement_Warning_Window_Exit.style.gridTemplateColumns = "1fr";
            HTMLDivElement_Warning_Window_Exit.style.gridTemplateRows = "1fr";
            HTMLDivElement_Warning_Window_Exit.style.gridRow = 1;
            HTMLDivElement_Warning_Window_Exit.style.gridColumn = 2;
            HTMLDivElement_Warning_Window_Exit.style.backgroundColor = "#ff6363";

            // Append the child
            $("#warning-window-titlebar").append(HTMLDivElement_Warning_Window_Exit);

            // Create the element
            let HTMLParagraphElement_Warning_Window_Exit = document.createElement("p");

            // Set text context
            HTMLParagraphElement_Warning_Window_Exit.textContent = "x";

            // Set attributes
            HTMLParagraphElement_Warning_Window_Exit.setAttribute("id", "titlebar-exit");

            // Style the element
            HTMLParagraphElement_Warning_Window_Exit.style.gridColumn = "auto";
            HTMLParagraphElement_Warning_Window_Exit.style.gridRow = "auto";
            HTMLParagraphElement_Warning_Window_Exit.style.justifySelf = "center";
            HTMLParagraphElement_Warning_Window_Exit.style.alignSelf = "center";
            HTMLParagraphElement_Warning_Window_Exit.style.fontFamily = "Lato, sans-serif";
            HTMLParagraphElement_Warning_Window_Exit.style.fontSize = "0.8em";
            HTMLParagraphElement_Warning_Window_Exit.style.cursor = "default";

            // Append the child
            $("#titlebar-exit-container").append(HTMLParagraphElement_Warning_Window_Exit);

            // Add the event listner
            $("#titlebar-exit").on("click", function() {

                // Remove the window
                HTMLDivElement_Warning_Window.remove();

            });

            // Create the element
            let HTMLDivElement_Warning_Window_Form = document.createElement("div");

            // Set the element attributes
            HTMLDivElement_Warning_Window_Form.setAttribute("id", "warning-window-form");

            // Style the element
            HTMLDivElement_Warning_Window_Form.style.display = "grid";
            HTMLDivElement_Warning_Window_Form.style.gridColumn = "auto";
            HTMLDivElement_Warning_Window_Form.style.gridRow = 2;
            HTMLDivElement_Warning_Window_Form.style.gridTemplateColumns = "1fr";
            HTMLDivElement_Warning_Window_Form.style.gridTemplateRows = "0.2fr 1fr";

            // Append the child
            $("#user-warning-window").append(HTMLDivElement_Warning_Window_Form);

            // Create the element
            HTMLParagraphElement_Warning_Window_Form = document.createElement("p");

            // Set the text content
            HTMLParagraphElement_Warning_Window_Form.textContent = "Please input a brief description that describes the incident you've had with this user.";

            // Style the element
            HTMLParagraphElement_Warning_Window_Form.style.gridColumn = "auto";
            HTMLParagraphElement_Warning_Window_Form.style.gridRow = 1;
            HTMLParagraphElement_Warning_Window_Form.style.justifySelf = "center";
            HTMLParagraphElement_Warning_Window_Form.style.alignSelf = "start";
            HTMLParagraphElement_Warning_Window_Form.style.color = "#FFFFFF";
            HTMLParagraphElement_Warning_Window_Form.style.fontFamily = "Lato, sans-serif";
            HTMLParagraphElement_Warning_Window_Form.style.fontSize = "0.9em";
            HTMLParagraphElement_Warning_Window_Form.style.fontWeight = "300";
            HTMLParagraphElement_Warning_Window_Form.style.padding = "10px 10px 10px 10px";

            // Append the element
            $("#warning-window-form").append(HTMLParagraphElement_Warning_Window_Form);

            // Create the element
            HTMLTextAreaElement_Warning_Window_Form = document.createElement("textarea");

            // Set the element attributes
            HTMLTextAreaElement_Warning_Window_Form.setAttribute("placeholder", "Report Description");
            HTMLTextAreaElement_Warning_Window_Form.setAttribute("id", "window-warning-description");

            // Style the element
            HTMLTextAreaElement_Warning_Window_Form.style.gridColumn = "auto";
            HTMLTextAreaElement_Warning_Window_Form.style.gridRow = 2;
            HTMLTextAreaElement_Warning_Window_Form.style.justifySelf = "center";
            HTMLTextAreaElement_Warning_Window_Form.style.alignSelf = "end";
            HTMLTextAreaElement_Warning_Window_Form.style.height = "40%";
            HTMLTextAreaElement_Warning_Window_Form.style.width = "90%";
            HTMLTextAreaElement_Warning_Window_Form.style.resize = "none";
            HTMLTextAreaElement_Warning_Window_Form.style.marginBottom = "40px";

            // Append element
            $("#warning-window-form").append(HTMLTextAreaElement_Warning_Window_Form);

            // Create the element
            let HTMLDivElement_Warning_Window_Footer = document.createElement("div");

            // Set element attributes
            HTMLDivElement_Warning_Window_Footer.setAttribute("id", "warning-window-footer");

            // Style the element
            HTMLDivElement_Warning_Window_Footer.style.display = "grid";
            HTMLDivElement_Warning_Window_Footer.style.gridColumn = "auto";
            HTMLDivElement_Warning_Window_Footer.style.gridRow = 3;
            HTMLDivElement_Warning_Window_Footer.style.gridTemplateColumns = "1fr auto";
            HTMLDivElement_Warning_Window_Footer.style.gridTemplateRows = "1fr";
            HTMLDivElement_Warning_Window_Footer.style.backgroundColor = "#383838";

            // Append the child
            $("#user-warning-window").append(HTMLDivElement_Warning_Window_Footer);

            // Create the element
            let HTMLInputElement_Warning_Window_Footer_Submit = document.createElement("input");

            // Set the element attributes
            HTMLInputElement_Warning_Window_Footer_Submit.setAttribute("id", "warning-window-submit");
            HTMLInputElement_Warning_Window_Footer_Submit.setAttribute("type", "button");
            HTMLInputElement_Warning_Window_Footer_Submit.setAttribute("value", "Submit");

            // Set text content
            HTMLInputElement_Warning_Window_Footer_Submit.textContent = "Submit";

            // Style the element
            HTMLInputElement_Warning_Window_Footer_Submit.style.gridColumn = 2;
            HTMLInputElement_Warning_Window_Footer_Submit.style.gridRow = "auto";
            HTMLInputElement_Warning_Window_Footer_Submit.style.justifySelf = "center";
            HTMLInputElement_Warning_Window_Footer_Submit.style.alignSelf = "center";
            HTMLInputElement_Warning_Window_Footer_Submit.style.height = "20px";
            HTMLInputElement_Warning_Window_Footer_Submit.style.width = "80px";
            HTMLInputElement_Warning_Window_Footer_Submit.style.color = "#FFFFFF";
            HTMLInputElement_Warning_Window_Footer_Submit.style.backgroundColor = "#ff2828";
            HTMLInputElement_Warning_Window_Footer_Submit.style.fontFamily = "Lato, sans-serif";
            HTMLInputElement_Warning_Window_Footer_Submit.style.fontSize = "0.8em";
            HTMLInputElement_Warning_Window_Footer_Submit.style.fontWeight = "300";
            HTMLInputElement_Warning_Window_Footer_Submit.style.margin = "2px 10px 2px 10px";
            HTMLInputElement_Warning_Window_Footer_Submit.style.border = "none";

            // Append the element
            $("#warning-window-footer").append(HTMLInputElement_Warning_Window_Footer_Submit);

            // Add event listner
            $("#warning-window-submit").on("click", function() {

                $(document).load("ajax/inc/administrative.inc.report.php", 
                {
                Complaintant: $("#grid-content__loggedin").data("user"),
                User: $("#info-username").children("p").text(),
                Description: $("#window-warning-description").val()
                },

                // Callback
                function(responseTxt, statusTxt, xhr) {

                    // Clear the text area
                    $("#window-warning-description").val("");

                }

            );

            });

        }

    });

    // Check for click
    $("#administrative-warn").on("click", function() {

        window.location.href = "ban.php?User=" + $("#info-username").children("p").text() + "Type=Warn";

    });

    // Check for click
    $("#administrative-ban").on("click", function() {

        window.location.href = "ban.php?User=" + $("#info-username").children("p").text() + "Type=Ban";

    });

    // Check for click
    $("#administrative-edit").on("click", function() {

        if($("#administrative-edit").text() == "Edit") {

            $("#administrative-edit").text("Cancel");

        } else if($("#administrative-edit").text() == "Cancel") {

            $("#administrative-edit").text("Edit");

        }

    });

});