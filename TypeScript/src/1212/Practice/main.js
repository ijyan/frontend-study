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
// 현재 페이지 변호를 추적하는 변수
var currentPage = 1;
// 페이지 당 사진 수
var photoPerPage = 4;
function fetchPhotos(page) {
    return __awaiter(this, void 0, void 0, function () {
        var response, photo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    photo = (_a.sent());
                    // 현재 페이지에 해당하는 사진들만 잘라내서 반환
                    return [2 /*return*/, photo.slice((page - 1) * photoPerPage, page * photoPerPage)];
            }
        });
    });
}
// ! 사진을 페이지에 렌더링하는 함수
function renderPhotos(photos) {
    // 사진을 표시할 컨테이너 불러오기
    var $photoContainer = document.querySelector('.photo-container');
    // 컨테이너의 내용을 초기화
    $photoContainer.innerHTML = '';
    // 각 사진에 대해 HTML 요소 생성, 컨테이너에 추가
    photos.forEach(function (photo) {
        var photoEl = document.createElement('div');
        photoEl.className = 'photo-item';
        photoEl.innerHTML = "<img src='".concat(photo.thumbnailUrl, "' alt='").concat(photo.title, "'><p>").concat(photo.title, "</p>");
        $photoContainer.appendChild(photoEl);
    });
}
// ! '이전'버튼 클릭 이벤트 리스너 추가
// , !연산자의 경우: 해당 객체가 null 이나 undefined가 아니라고 단언하는데 사용
document.querySelector('.btn-prev').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        updatePhotos();
    }
});
// ! '다음'버튼 클릭 이벤트 리스너 추가
document.querySelector('.btn-next').addEventListener('click', function () {
    currentPage++;
    updatePhotos();
});
// ! 사진을 업데이트하는 비동기 함수
function updatePhotos() {
    return __awaiter(this, void 0, void 0, function () {
        var photo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPhotos(currentPage)];
                case 1:
                    photo = _a.sent();
                    renderPhotos(photo);
                    return [2 /*return*/];
            }
        });
    });
}
// ! 초기 사진 로드
updatePhotos();
