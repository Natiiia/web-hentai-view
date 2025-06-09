from http.cookies import SimpleCookie

def get_cookie_string(cookie_dict):
    return '; '.join(f'{k}={v}' for k, v in cookie_dict.items())

def parse_cookie_to_json(cookie_list):
    result = {}
    for cookie_str in cookie_list:
        cookie = SimpleCookie()
        cookie.load(cookie_str)
        for key, morsel in cookie.items():
            result[key] = morsel.value
    return result
