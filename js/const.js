const LANGS = {
	VERSION: 'Version: 1.0.0',
	HELP: 'Hổ trợ',
	TEL: '0123456789',
	LOGIN: 'Đăng nhập',
	GUEST: 'Chơi ngay',
	FAST_ACTION: 'Thao tác quá nhanh',
	INPUT_FAIL: 'Dữ liệu nhập không hợp lệ',
	APP: {
		NAME: 'LotoOnline',
		DESC: 'Trò chơi giải trí dân gian',
		WELCOME: 'Chào mừng đến với LotoOnline! chúc bạn chơi game vui vẻ!',
		ONLINE: 'Đang online',
		FULL: 'Đã đầy',
		LIST: 'Danh sách',
		SERVER: 'Máy chủ',
		ROOM: 'Phòng',
		CHAT_HOLD: 'Nhập nội dung...',
		SEND: 'Gởi',
		INTO: 'Vào',
		BACK: 'Quay lại'
	},
	CONNECT: {
		ERROR: 'Không kết nối đến máy chủ',
		OTHER: 'Có người kết nối đến tài khoản của bạn'
	},
	RULES: {
		INPUT_FAIL: 'Dữ liệu nhập không hợp lệ',
		IN_SERVER: `Bạn đang ở máy chủ`,
		NOT_IN_SERVER: `Bạn chưa chọn máy chủ`,
		NOT_ROOM_EXISTS: 'Không tìm thấy phòng',
		IN_ROOM: `Bạn đang ở trong phòng`,
		NOT_IN_ROOM: `Bạn không ở trong phòng`,
		NOT_IS_ROOM_MASTER: `Bạn không phải là chủ phòng`,
		IS_GAME_WAIT: 'Game chưa bắt đầu',
		IS_GAME_STARTED: 'Game đã bắt đầu',
		HAS_PAGE: 'Người chơi đã mua giấy'
	},
	ROOMS: {
		ENTER: 'đã vào',
		LEAVE: 'đã thoát'
	},
	ROOM: {
		CREATE: 'Tạo phòng',
		ID: 'Id phòng',
		PLAYERS: 'Người chơi',
		STATUS: 'Trạng thái',
		ENTER: 'đã vào phòng',
		LEAVE: 'đã rời phòng',
		WAIT_START: 'Bắt đầu sau',
		WAIT_CHECK: 'Chờ báo kinh',
		CHANGE_PAGE: 'Đổi giấy',
		CHECK_PAGE: 'Báo kinh',
		BUY_PAGE: 'Mua giấy',
		BET: 'Cược',
		TIME: 'Thời gian',
		TOTAL: 'Tổng thưởng',
	},
	PLAYER: {
		WINNER: 'dã kinh'
	},
	GAME: {
		VIEWED: 'Đang xem',
		WAIT: 'Đang chờ',
		WAIT_START: 'Chuẩn bị',
		STARTTING: 'Đang chơi',
		WAIT_CHECK: 'Báo kinh',
		AUTO_CHECK: 'Tự động dò'
	}
}

const SCENES = {
	LOGIN: 1,
	SERVERS: 2,
	SERVER: 3,
	ROOM: 4
}