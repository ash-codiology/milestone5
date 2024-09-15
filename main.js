var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    var profilepictureinput = document.getElementById('profilepicture');
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var jobTitleElement = document.getElementById("jobTitle");
    var companyNameElement = document.getElementById("companyName");
    var workDurationElement = document.getElementById("workDuration");
    var skillsElement = document.getElementById("skills");
    ///////
    var usernameElement = document.getElementById("username");
    if (profilepictureinput && nameElement && emailElement && phoneElement && educationElement && jobTitleElement && companyNameElement && workDurationElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var job = jobTitleElement.value;
        var company = companyNameElement.value;
        var workDuration = workDurationElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath = "resume/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        //picture element
        var profilepicturefile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        //creconstate resume output
        var resumeOutput = "\n    <h2> resume</h2>\n    ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n    <p><strong>Name:</strong><SPAN id=\"edit-name\" class=\"editable\" ").concat(name_1, " </SPAN></p>\n    <p><strong>Email:</strong><SPAN id=\"email\" class=\"editable\"").concat(email, " </SPAN></p>\n    <p><strong>Phone number:</strong><SPAN id=\"edit-phone\" class=\"editable\" ").concat(phone, " </SPAN></p>\n     \n    <h3>Education</h3>\n    <p id=\"education\" class=\"editable\">").concat(education, "</p>\n    \n    <h3>job</h3>\n    <p id=\"job\" class=\"editable\">").concat(job, "</p>\n    \n    <h3>company</h3>\n    <p id=\"company\" class=\"editable\">").concat(company, "</p>\n    \n    <h3>workDuration</h3>\n    <p id=\"workDuration\" class=\"editable\">").concat(workDuration, "</p>\n    \n    <h3>skills</h3>\n    <p id=\"skills\" class=\"editable\">").concat(skills, "</p>          \n    \n    ");
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download your 2024 Resume';
        //display the resume in the output container
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");
            //create container for buttons
            var buttonscontainer = document.createElement("div");
            buttonscontainer.id = "buttonscontainer";
            resumeOutputElement.appendChild(buttonscontainer);
            resumeOutputElement.style.display = "block";
            //add dowmload pdf button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as pdf";
            downloadButton.addEventListener("click", function () {
                window.print();
            });
            buttonscontainer.appendChild(downloadButton);
            //add shareable link button
            var sharelinkButton = document.createElement("button");
            sharelinkButton.textContent = "copy shareable link";
            sharelinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareablelink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareablelink = "https://yourdomain.com/resume/".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                            //use clipboard api to copy thr sharable link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareablelink)];
                        case 1:
                            //use clipboard api to copy thr sharable link
                            _a.sent();
                            alert("shareable link copied to clipboard!. please try again.");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("failed to copy link:", err_1);
                            alert("failed to copy link to clipboard!. please try again.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonscontainer.appendChild(sharelinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
    }
    else {
        console.error("form elements are missing");
    }
});
