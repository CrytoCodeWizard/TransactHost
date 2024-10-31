import {
    PersonIcon,
    Pencil1Icon,
    EyeOpenIcon
} from '@radix-ui/react-icons';

const roles = [
    {
        label: 'Admin',
        value: 'admin',
        icon: PersonIcon
    },
    {
        label: 'Editor',
        value: 'editor',
        icon: Pencil1Icon
    },
    {
        label: 'Viewer',
        value: 'viewer',
        icon: EyeOpenIcon
    }
];

export default roles;