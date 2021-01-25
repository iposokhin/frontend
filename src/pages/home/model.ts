import 'effector-root';
import { checkAuthenticated } from 'features/session';
import { createStart } from 'lib/page-routing';

export const pageStarted = createStart();

const pageReady = checkAuthenticated({ when: pageStarted });
