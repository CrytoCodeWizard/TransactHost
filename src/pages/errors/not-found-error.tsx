import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const NotFoundError = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="h-svh">
            <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-1">
                <h1 className="text-[7rem] font-bold leading-tight">
                    404
                </h1>
                <span className="font-medium">
                    {t("page_not_found")}
                </span>
                <p className="text-center text-muted-foreground">
                    {t("page_not_found_desc")}
                </p>
                <div className="mt-6 flex gap-4">
                    <Button variant={"secondary"} onClick={() => navigate(-1)}>
                        {t("go_back")}
                    </Button>
                    <Button onClick={() => navigate('/')}>
                        {t("back_to_home")}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundError;