var min_hourly_budget = 9;
var min_fixed_budget = 20;
var MatchingSkills_count = 1;
var star_rating = 5;
var skillFilter = Array('Google Docs', 'Google APIs', 'Google Sheets', 'Ruby on Rails', 'Ruby', 'Odoo', 'Heroku', 'Flutter', '.NET', 'C# Programming', 'Xamarin', 'Visual Basic for Apps', 'Visual Basic', 'VB.NET', 'VBScript', 'Excel VBA', 'Excel Macros', 'Excel', 'Microsoft Office', 'Word', 'Word Processing', 'Microsoft Access', 'Powerpoint', 'Java', 'JavaFX', 'Swing (Java)', 'Eclipse', 'Netbeans', 'ASP', 'ADO.NET', 'ASP', 'C Programming', 'Python', 'Selenium Webdriver', 'Web Scraping', 'PHP', 'Javascript', 'AJAX', 'XML', 'Website Design', 'Graphic Design', 'Copywriting', 'Windows Desktop', 'Data Processing', 'Data Entry', 'Ruby on Rails', 'Accounting', 'SQL', 'WordPress', 'CSS', 'Customer Support', 'Financial Research', 'Magento', 'Django', 'Software Architecture', 'Oracle', 'CMS', 'eCommerce', 'Sharepoint', 'PDF', 'Finance', 'Web Search', 'Website Testing', 'Desktop Support', 'Microsoft Exchange', 'Google App Engine', 'OSCommerce', 'CakePHP', 'Codeigniter', 'PSD to HTML', 'Microsoft Expression', 'Shell Script', 'Microsoft', 'MySQL', 'Amazon Web Services', 'C++ Programming', 'HTML5', 'Data Mining', 'HTML', 'jQuery / Prototype', 'Shopify Templates', 'Copy Typing', 'Symfony PHP', 'OCR', 'BigCommerce', 'WPF', 'MVC', 'Database Administration', 'Landing Pages', 'node.js', 'Shopify', 'Open Cart', 'Zoho', 'Express JS', 'Socket IO', 'Bootstrap', 'PostgreSQL', 'Software Development', 'Ruby', 'MariaDB', 'Laravel', 'General Office', 'Database Programming', 'Microsoft Outlook', 'Financial Analysis', 'Web Services', 'Microsoft SQL Server', 'SQLite', 'RESTful', 'Angular.js', 'Database Development', 'React.js', 'Google Maps API', 'WooCommerce', 'Plugin', 'Wix', 'Steam API', 'JSON', 'OAuth', 'Regular Expressions', 'Coding', 'Programming', 'Typescript', 'Docker', 'Copyright', 'cURL', 'Typing', 'Scripting', 'Web Development', 'Object Oriented Programming (OOP)', 'Web Crawling', 'CSS3', 'Scrapy', 'XAML', 'iOS Development', 'Data Cleansing', 'Data Scraping', 'Data Extraction', 'Bash Scripting', 'API', 'Full Stack Development', 'Backend Development', 'Frontend Development', 'Flask', 'BeautifulSoup', 'xpath', 'Datatables', 'Vue.js', 'HTTP', 'Web API', 'RESTful API', 'Angular Material', 'PostreSQL', 'NoSQL', 'MongoDB', 'Server', 'NumPy', 'Office 365', 'React Native', 'jQuery', 'Front-end Design', 'Oracle Database');
var block_currencies = Array();
var block_countries = Array("India", "China", "Pakistan", "Vietnam", "Bangladesh", 'Morocco', 'Japan');
var block_keywords = Array('prestashop', 'instagram', 'facebook', 'google ad', 'free#lancer bidd#ing sys#tem', 'free`lancer bidd`ing sys`tem', 'bi-dding sy-stem', 'pdf to document', 'personal assistant', 'female assistant', 'proxy', 'pdf to word', 'btc', 'bitcoin', 'before release of product', 'pdf file to excel', 'marketing for', 'click funnels', 'chrome extension', 'copy typing', 'new software release', 'type documents', 'customer service', 'virtual assistant', 'retyping ', 'data entry clerk', 'customer service', 'virtural assistant', 'new chrome extension', '@gmail.com', 'pdf to excel', 'mt4', 'cs:go', 'social media research', 'minecraft', ' dating ', ' sms ', 'lighthearted', 'arduino', 'upwork', 'global meeting', 'satellitetv24.com', 'telegram', 'mengerjakan', 'adult', 'linkedin');
setInterval(function() {
    replaceChatUrls();
}, 1000);
var url = window.location.href;
if (url.toLowerCase().indexOf("search/projects/") >= 0) {
    jQuery(".search-result-list").append(`
<li class="extra-project-info" ng-repeat="project in search.results.projects">
    <span class="project-id">{[{project.id}]}</span>
    <span class="ownner-id">{[{project.owner_id}]}</span>
    <span class="project-type">{[{project.type}]}</span>
    <span class="budget-min">{[{project.budget.minimum}]}</span>
    <span class="budget-max">{[{project.budget.maximum}]}</span>
    <span class="currency-code">{[{project.currency.code}]}</span>
    <span class="country_name">{[{project.owner.location.city}]}, {[{project.owner.location.country.name}]} | {[{project.owner.chosen_role}]} , {[{project.owner.role}]}</span>
    <span class="project_des">{[{project.description}]}</span>
</li>`);
    var ownner_country = "";
    var ownner_role = "";
    setInterval(function() {
        if (jQuery('.search-result-newProjectAlert-icon').length === 1) {
            jQuery('.search-result-newProjectAlert-icon').click();
            var primary_li = jQuery('.search-result-list>li').first();
            var extra_li = jQuery('.search-result-list>.extra-project-info').first();
            var project_id = extra_li.find('span.project-id').text();
            var project_type = extra_li.find('span.project-type').text();
            var budget_min = parseInt(extra_li.find('span.budget-min').text());
            var budget_max = parseInt(extra_li.find('span.budget-max').text());
            var currency_code = extra_li.find('span.currency-code').text();
            var project_skills = primary_li.find('a>.search-result-item .info-card-skills').text().trim();
            var ownner_id = extra_li.find('.ownner-id').text();
            var ajax_url = 'https://www.freelancer.com/api/users/0.1/users/' + ownner_id;
            var primary_title = primary_li.find('h2.info-card-title').text().trim();
            var project_des = extra_li.find('span.project_des').text();
            var rating = primary_li.find('div.info-card-rating').attr('data-star_rating');
            jQuery.get(ajax_url, function(data) {
                var block = false;
                ownner_country = data.result.location.country.name;
                ownner_role = data.result.role;
                var project_url = primary_li.find('a').attr('href');
                primary_li.find('a').attr('href', "https://www.freelancer.com" + project_url + "/?w=f");
                primary_li.find('.search-result-item').append('<div class="checked-result"></div>');
                if (block_countries.indexOf(ownner_country) >= 0) {
                    primary_li.find('.checked-result').append('<span style="color:red;">' + ownner_country + '...</span>');
                    block = true;
                    return;
                }
                // check rating
                if (parseFloat(rating) < star_rating) {
                    primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">Rating : ' + rating + '...</span>');
                    block = true;
                    return;
                }
                //user role fulter
                // if (ownner_role === 'freelancer') {
                //     primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">Freelancer...</span>');
                //     block = true;
                //     return;
                // } 
                //description filter
                block_keywords.forEach(function(element) {
                    if (primary_title.toLowerCase().indexOf(element.toLowerCase()) >= 0 || project_des.toLowerCase().indexOf(element.toLowerCase()) >= 0) {
                        primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">Spam...</span>');
                        block = true;
                        return;
                    }
                });
                if (block_currencies.indexOf(currency_code) > -1) {
                    primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">' + currency_code + '...</span>');
                    block = true;
                    return;
                }
                bid_price = (budget_min + budget_max) / 2;
                var ajax_data = '';
                var result = 'Success Ajax';
                if (project_type == "hourly") {
                    if (bid_price < min_hourly_budget) {
                        primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">Small Hourly Rate : $' + bid_price + ' ' + currency_code + '...</span>');
                        block = true;
                        return;
                    }
                } else if (project_type == "fixed") {
                    if (bid_price < min_fixed_budget) {
                        primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">Small Budget : $' + bid_price + ' ' + currency_code + '...</span>');
                        block = true;
                        return;
                    }
                }
                //skill filter
                var skill_count = "";
                var requiredskills = "";
                skillFilter.forEach(function(element) {
                    if (project_skills.toLowerCase().indexOf(element.toLowerCase()) >= 0) {
                        skill_count++;
                        requiredskills = requiredskills + "," + element;
                    }
                }, this);
                if (skill_count < MatchingSkills_count) {
                    primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">No Skill...</span>');
                    block = true;
                    return;
                }
                if (block == true) {
                    primary_li.find('.checked-result').append('&nbsp;<span style="color:red;">Skip this job...</span>');
                    return;
                }
                primary_li.find('.checked-result').append('&nbsp;<span style="color:blue;">Project openning...</span>');
                window.open("https://www.freelancer.com" + project_url + "/?w=f", "_blank");
            });
            jQuery('.search-result-list').find('.extra-project-info').empty();
        }
    }, 250);
} else if (url.toLowerCase().indexOf("com/projects/") >= 0) {
    setInterval(function() {
        if (jQuery('.PageProjectViewDeleted-alert').length > 0) window.close();
    }, 1000)
    setTimeout(function() {
        window.close()
    }, 600000);
}

function replaceChatUrls() {
    var links = jQuery('app-messaging-chat').find('a');
    for (var i = links.length - 1; i >= 0; i--) {
        var element = links[i];
        var href = jQuery(element).attr('href');
        if (href.indexOf('?w=f') < 0) {
            if (href.indexOf('?ref_project_id=') >= 0) {
                var res = href.split('?ref_project_id=');
                href = res[0] + '?w=f';
            }
            if (href.indexOf('/projects/') >= 0) {
                href = href + '/?w=f';
            }
            jQuery(element).attr('href', href);
        }
    }
    links = jQuery("a.LinkElement.ng-star-inserted");
    for (var i = links.length - 1; i >= 0; i--) {
        var element = links[i];
        var href = jQuery(element).attr('href');
        if (href.indexOf('/u/') >= 0 || href.indexOf('/projects/') >= 0) {
            if (href.indexOf('?w=f') < 0) {
                href = href + '/?w=f';
                jQuery(element).attr('href', href);
            }
        }
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// ### extern js lib
// https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js
