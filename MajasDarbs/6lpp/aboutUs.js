$(document).ready(function () {

    var previousActiveTabIndex = 0;

    $(".tab-switcher").on('click', function () {

        var tabClicked = $(this).data("tab-index");

        if(tabClicked != previousActiveTabIndex) {

            $("#allTabsContainer .tab-container").each(function () {

                if($(this).data("tab-index") == tabClicked) {

                    $(".tab-container").hide();
                    $(this).show();
                    previousActiveTabIndex = $(this).data("tab-index");
                    return;

                }
            });
        }
    });
});