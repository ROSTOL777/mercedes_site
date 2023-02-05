import tabs from "./modules/tabs";
import smoothskroll from "./modules/smoothskroll";
import sendform from "./modules/sendform";
import modal from "./modules/modal";
import burger from "./modules/burger";
import accordion from "./modules/accordion";

tabs('[data-tabs-handler]', '[data-tabs-field]')
smoothskroll('.menu-list__link', '.main__scroll')
sendform('.form-test-drive')
modal('.more', '.modal')
burger('.humburger-menu', '.menu')
accordion('.feature__link', '.feature-sub')